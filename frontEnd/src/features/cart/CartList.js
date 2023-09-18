import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectAllCartItems } from "./cartItemsSlice";
import { Button, Container } from "reactstrap";
import CartItem from "./CartItem";

const CartList = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectAllCartItems);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <Container>
            {cartItems.map((cartItem) => {
                return (
                    <CartItem item={cartItem} />
                );
            })}
            <Button onClick={() => handleClearCart()}>Clear Cart</Button>
            {/* TODO: Calculate Subtotal Price (add message "taxes calculated at checkout") */}
        </Container>
    );
};

export default CartList;