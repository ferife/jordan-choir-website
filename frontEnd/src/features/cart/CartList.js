import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectAllCartItems } from "./cartItemsSlice";
import { Button, Col, Container, Row, Table } from "reactstrap";
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
        <Container>
            {cartItems.map((cartItem) => {
                return (
                    <CartItem item={cartItem} />
                );
            })}
            <Row>
                <Col>
                    <Button className="m-1" onClick={() => handleClearCart()}>Clear Cart</Button>
                </Col>
                <Col>
                    <Checkout />
                </Col>
            </Row>
        </Container>
    );
};

export default CartList;