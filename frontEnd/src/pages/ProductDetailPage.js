import { useParams } from "react-router-dom";
import { useGetProductQuery, } from "../features/shop/productsSlice";
import { Container, Row } from "reactstrap";
import ProductDetail from "../features/shop/ProductDetail";
import SubHeader from "../components/SubHeader";
import AddToCartForm from "../features/cart/AddToCartForm";
import ToCartButton from "../features/cart/ToCartButton";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const id = productId;

    
    const {
        data,
        isLoading,
        isError,
        error,
    } = useGetProductQuery(id);

    useEffect(() => {
        isError && toast.error(error);
    }, [isError, error]);

    
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <p>Server error. Try again later.</p>;

    console.log('id', id);

    const product = data;
    console.log('product', product);


    return (
        <Container>
            <SubHeader current={data.name} detail={true} />
            <ToCartButton />
            <Row>
                <ProductDetail product={data} />
                <AddToCartForm product={data} prodId={id} />
            </Row>
        </Container>
    );
};

export default ProductDetailPage