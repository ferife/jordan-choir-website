import { selectAllProducts } from "./productsSlice";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductsList = () => {
    const products = useSelector(selectAllProducts);
    // console.log('products: ', products);
    return (
        <Row className="ms-auto">
            {products.map((product) => {
                return (
                    <Col md='5' className="m-4" key={product.id}>
                        <ProductCard product={product} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ProductsList;