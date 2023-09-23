import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardTitle, Col, Container, Row } from "reactstrap";
import { getTotals } from "./cartItemsSlice";
import { formatPrice } from "../../utils/formatPrice";

const Checkout = () => {
    
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals());
    }, [cartItems]);

    return (
        <Card>
            <CardTitle>
                <Container>
                    <Row>
                        <Col>SubTotal</Col>
                        <Col>{formatPrice(cartItems.cartTotalPrice)}</Col>
                    </Row>
                </Container>
            </CardTitle>
        </Card>
    );
};

export default Checkout;