import { useParams } from "react-router-dom";
import { selectProductById } from "../features/shop/productsSlice";
import { Button, Container, Row } from "reactstrap";
import ProductDetail from "../features/shop/ProductDetail";
import SubHeader from "../components/SubHeader";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
    // TODO: Set Special formats for selling clothes vs merch items (such as pop sockets) vs donations
    const { productId } = useParams();
    const product = useSelector(selectProductById(productId));
    console.log('product: ', product);

    return (
        <Container>
            <SubHeader current={product.name} detail={true} />
            <Button>Cart</Button>
            <Row>
                <ProductDetail product={product} />
            </Row>
        </Container>
    );
};

export default ProductDetailPage