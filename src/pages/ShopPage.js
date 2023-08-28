import { Button, Container } from "reactstrap"
import ProductsList from "../features/shop/ProductsList";
import SubHeader from "../components/SubHeader";

const ShopPage = () => {
    // TODO: Add shopping cart function. Need ability to make data persist through refresh. Redux could help with that
    // TODO: Integrate PayPal Checkout
    return (
        <Container>
            <SubHeader current='Shop' />
            <Button> <i className='fa fa-shopping-cart' /> Cart</Button>
            <ProductsList />
        </Container>
    );
};

export default ShopPage;