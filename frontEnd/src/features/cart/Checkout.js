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
        <Card className='m-1'>
            <CardTitle>
                <Container>
                    <Row>
                        <Col className="text-end">SubTotal</Col>
                        <Col>{formatPrice(cartItems.cartTotalPrice)}</Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>Taxes and other fees calculated at checkout</Col>
                    </Row>
                </Container>
            </CardTitle>
        </Card>
    );
};


export default Checkout;