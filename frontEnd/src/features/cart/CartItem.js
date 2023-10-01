import { Button, Card, CardImg, Col, Container, InputGroup, Row } from "reactstrap";
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from "./cartItemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { selectAllProducts, useGetProductsQuery } from "../shop/productsSlice";

const CartItem = ({ item }) => {

    const dispatch = useDispatch();


    const {
        data,
        isLoading,
        isError,
        isSuccess,
    } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <p>Server error. Try again later.</p>;

    if (isSuccess) {
        const products = data;

        console.log(data);

        const handleDecreaseCartItem = () => {
            dispatch(decreaseCartItemQuantity(item));
        };
        const handleIncreaseCartItem = () => {
            dispatch(increaseCartItemQuantity(item));
        };

        const handleRemoveFromCart = () => {
            dispatch(removeCartItem(item));
        };

        const subtotalPrice = products.filter(product => product.id === item.productId).donation
            ? item.price
            : item.price * item.quantity;

        const thisItem = products.filter(product => product.id === item.productId)[0];

        console.log('thisItem', thisItem)

        return (
            <Row className="ms-auto border-bottom border-dark d-flex align-items-center d-table-row" key={thisItem.id}>
                {thisItem.image && (
                    <Col className="d-none d-md-block" md='2' lg='2' >
                        <Card outline className="p-0 m-1">
                            <CardImg className="p-0" alt={thisItem.name} src={thisItem.image} />
                        </Card>
                    </Col>
                )}
                <Col className="">   {/* Name */}
                    {thisItem.name}
                </Col>
                <Col className="border">   {/* Modifiers */}
                    <Container>
                        {Object.keys(item.modifiers).map((mod) => {
                            return (
                                <Row>
                                    <Col md='6' className="text-end d-none d-md-block">{mod.charAt(0).toUpperCase() + mod.slice(1)}</Col>
                                    <Col md='6'>{item.modifiers[mod]}</Col>
                                </Row>
                            );
                        })}
                        {item.tier && (
                            <Row>
                                <Col className="text-end">Tier</Col>
                                <Col>{item.tier}</Col>
                            </Row>
                        )}
                    </Container>
                </Col>
                <Col>
                    {!products.filter(product => product.id === item.productId).donation && (    /* Quantity */
                        <InputGroup className="ms-auto">
                            <Button
                                className="col-1"
                                onClick={() => {
                                    handleDecreaseCartItem(item)
                                }}
                            > - </Button>
                            <div className="text-center col" >{item.quantity}</div>
                            <Button
                                className='col-1'
                                onClick={() => {
                                    handleIncreaseCartItem(item)
                                }}
                            > + </Button>
                        </InputGroup>
                    )}
                </Col>
                <Col className="text-center">   {/* PriceXQuantity */}
                    {formatPrice(subtotalPrice)}
                </Col>
                <Col>   {/* Remove Cart Item */}
                    <Button onClick={handleRemoveFromCart} className="m-1">Remove Cart Item</Button>
                </Col>
            </Row>
        );
    }
};

export default CartItem;