import { useGetProductsQuery } from "./productsSlice";
import { Col, Row } from "reactstrap";
import ProductCard from "./ProductCard";

const ProductsList = () => {
    const {
        data,
        isLoading,
        isError,
    } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <p>Server error. Try again later.</p>
    
    return (
        <Row className="ms-auto d-flex justify-content-center">
            {data.map((product) => {
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