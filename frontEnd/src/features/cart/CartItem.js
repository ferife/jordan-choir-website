import { Button, Col, Container, InputGroup, Row } from "reactstrap";
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from "./cartItemsSlice";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";
import { selectAllProducts } from "../shop/productsSlice";

const CartItem = ({ item }) => {
    // TODO: Finish CartItem
    // Pieces:
    // Image of item
    // Name of item
    // Options chosen for item (size, color, tier)
    // Quantity
    // Add buttons to modify quantity directly on cart
    // Exclude ability to do this for stuff where it would be inappropriate
    // Min quantity: 1
    // Button to remove item from cart
    // Price
    // Quantity x Individual Price
    // For items with tiers, show price of chosen tier
    // Pressing on CartItem takes user to relevant ProductDetailPage
    /*
    id
    productId
    price
    size
    color
    tier
    quantity
    dateTimeAdded
    */
    // const name = ;
    // console.log
    console.log('item: ', item);

    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);

    const handleDecreaseCartItem = () => {
        dispatch(decreaseCartItemQuantity(item));
    };
    const handleIncreaseCartItem = () => {
        dispatch(increaseCartItemQuantity(item));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeCartItem(item));
    };

    const subtotalPrice = products.find(product => product.id === item.productId).donation 
        ? item.price 
        : item.price * item.quantity;

    return (
        <Row className="ms-auto">
            {/* <Col>Product Image</Col> */}
            <Col className="text-center">   {/* Name */}
                {products.find(product => product.id === item.productId).name}
            </Col>
            <Col>   {/* Modifiers */}
                <Container>
                    {Object.keys(item.modifiers).map((mod) => {
                        return (
                            <Row>
                                <Col className="text-end">{mod.charAt(0).toUpperCase() + mod.slice(1)}</Col>
                                <Col>{item.modifiers[mod]}</Col>
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
                {!products.find(product => product.id === item.productId).donation && (    /* Quantity */
                    <InputGroup className="ms-auto">
                        <Button
                            className="col"
                            onClick={() => {
                                handleDecreaseCartItem(item)
                            }}
                        > - </Button>
                        <div className="col-8 text-center">{item.quantity}</div>
                        <Button
                            className='col'
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
                <Button onClick={handleRemoveFromCart}>Remove Cart Item</Button>
            </Col>
        </Row>
    );
};

export default CartItem;