import { selectAllProducts } from "./productsSlice";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductsList = () => {
    const products = useSelector(selectAllProducts);
    console.log('products: ', products);
    return (
        <Row className="ms-auto d-flex justify-content-center">
            {products.map((product) => {
                return (
                    <Col xs='12' sm='5' lg='3' className="m-4" key={product.id}>
                        <ProductCard product={product} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ProductsList;