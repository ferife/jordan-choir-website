import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals, selectAllCartItems } from "./cartItemsSlice";
import { Button, Col, Container, Row } from "reactstrap";
import CartItem from "./CartItem";
import { useEffect } from "react";
import Checkout from "./Checkout";

const CartList = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectAllCartItems);

    // useEffect(() => {
    //     dispatch(getTotals());
    // }, [cartItems]);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <Container className="table-striped">
            {cartItems.map((cartItem) => {
                return (
                    <CartItem item={cartItem} />
                );
            })}
            <Row>
                <Col>
                    <Button onClick={() => handleClearCart()}>Clear Cart</Button>
                </Col>
                <Col>
                    <Checkout />
                </Col>
            </Row>
            {/* TODO: Calculate Subtotal Price (add message "taxes calculated at checkout") */}
        </Container>
    );
};

export default CartList;