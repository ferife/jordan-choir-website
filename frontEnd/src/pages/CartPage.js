import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import CartList from "../features/cart/CartList";

const CartPage = () => {
    return (
        <Container>
            <SubHeader current='Cart' detail={true} />
            <CartList />
        </Container>
    );
};

export default CartPage;