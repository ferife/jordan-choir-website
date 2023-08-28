import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";

const CartPage = () => {
    return (
        <Container>
            <SubHeader current='Cart' detail={true} />
        </Container>
    );
};

export default CartPage;