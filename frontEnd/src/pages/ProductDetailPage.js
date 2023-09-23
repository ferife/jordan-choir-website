import { useParams } from "react-router-dom";
import { selectProductById } from "../features/shop/productsSlice";
import { Container, Row } from "reactstrap";
import ProductDetail from "../features/shop/ProductDetail";
import SubHeader from "../components/SubHeader";
import { useSelector } from "react-redux";
import AddToCartForm from "../features/cart/AddToCartForm";
import ToCartButton from "../features/cart/ToCartButton";

const ProductDetailPage = () => {
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));

    return (
        <Container>
            <SubHeader current={product.name} detail={true} />
            <ToCartButton />
            <Row>
                <ProductDetail product={product} />
                <AddToCartForm product={product} />
            </Row>
        </Container>
    );
};

export default ProductDetailPage