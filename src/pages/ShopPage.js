import { Container } from "reactstrap"
import ProductsList from "../features/shop/ProductsList";
import SubHeader from "../components/SubHeader";
import ToCartButton from "../features/cart/ToCartButton";

const ShopPage = () => {
    // TODO: Integrate PayPal Checkout
    return (
        <Container>
            <SubHeader current='Shop' />
            <ToCartButton />
            <ProductsList />
        </Container>
    );
};

export default ShopPage;