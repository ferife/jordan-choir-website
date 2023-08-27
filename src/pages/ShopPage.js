import { Button, Container } from "reactstrap"
import ProductsList from "../features/shop/ProductsList";
import SubHeader from "../components/SubHeader";

const ShopPage = () => {
    // TODO: Let to have a "from" price. For example, donations can be "from (minPrice)"
    // TODO: Add shopping cart function
    return (
        <Container>
            <SubHeader current='Shop' />
            <Button>Cart</Button>
            <ProductsList />
        </Container>
    );
};

export default ShopPage;