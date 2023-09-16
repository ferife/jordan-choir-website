import { useSelector } from "react-redux";
import { selectAllCartItems } from "./cartItemsSlice";
import { Container } from "reactstrap";
import CartItem from "./CartItem";

// TODO: CartList
const CartList = () => {
    const cartItems = useSelector(selectAllCartItems);
    console.log('cartItems: ', cartItems);
    return (
        <Container>
            {cartItems.map((cartItem) => {
                return (
                    <CartItem item={cartItem} />
                );
            })}
            {/* TODO: Calculate Total Price */}
        </Container>
    );
};

export default CartList;