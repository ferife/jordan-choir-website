import { Button, Col, Container, InputGroup, Row } from "reactstrap";
import { PRODUCTS } from "../../app/shared/PRODUCTS";
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from "./cartItemsSlice";
import { useDispatch } from "react-redux";
import { formatPrice } from "../../utils/formatPrice";

// const options = (item) => {
//     console.log(item.size);
//     console.log(item.color);
//     console.log(item.tier);
//     return (
//         <Container>
//             {item.size !== 'N/A' && (
//                 <Row>
//                     <Col>Size: </Col>
//                     <Col>{item.size}</Col>
//                 </Row>
//             )}
//             {item.color !== 'N/A' && (
//                 <Row>
//                     <Col>Color: </Col>
//                     <Col>{item.color}</Col>
//                 </Row>
//             )}
//             {item.tier !== 'N/A' && (
//                 <Row>
//                     <Col>Tier: </Col>
//                     <Col>{item.tier}</Col>
//                 </Row>
//             )}
//         </Container>
//     );
// };

const CartItem = ({ item }) => {
    // TODO: CartItem
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

    const handleDecreaseCartItem = () => {
        dispatch(decreaseCartItemQuantity(item));
    };
    const handleIncreaseCartItem = () => {
        dispatch(increaseCartItemQuantity(item));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeCartItem(item));
    };

    return (
        <Row className="ms-auto">
            {/* <Col>Product Image</Col> */}
            <Col>   {/* Name */}
                {PRODUCTS.find(product => product.id === item.productId).name}
            </Col>
            <Col>   {/* Modifiers */}
                <Container>{
                    Object.keys(item.modifiers).map((mod) => {
                        // console.log('mod: ', mod);
                        return (
                            <Row>
                                <Col className="text-end">{mod.charAt(0).toUpperCase() + mod.slice(1)}</Col>
                                <Col>{item.modifiers[mod]}</Col>
                            </Row>
                        );
                    })
                }</Container>
            </Col>
            <Col>   {/* Quantity */}
                <InputGroup className="ms-auto">
                    <Button
                        className="col"
                        onClick={() => {
                            console.log('q before: ', item.quantity);

                            handleDecreaseCartItem(item)

                            console.log('q after: ', item.quantity);
                        }}
                    > - </Button>
                    <div className="col-6 text-center">{item.quantity}</div>
                    <Button
                        className='col'
                        onClick={() => {
                            console.log('q before: ', item.quantity);

                            handleIncreaseCartItem(item)

                            console.log('q after: ', item.quantity);
                        }}
                    > + </Button>
                </InputGroup>
            </Col>
            <Col>   {/* PriceXQuantity */}
                {formatPrice(item.price * item.quantity)}
            </Col>
            <Col>   {/* Remove */}
                <Button onClick={handleRemoveFromCart}>Remove Cart Item</Button>
            </Col>
        </Row>
    );
};

export default CartItem;