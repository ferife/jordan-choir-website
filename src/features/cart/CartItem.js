import { Col, Container, Row } from "reactstrap";
import { PRODUCTS } from "../../app/shared/PRODUCTS";

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
    console.log('item name: ', PRODUCTS.find(product => product.id === item.productId).name);

    return (
        <Row className="ms-auto">
            <Col>Product Image</Col>
            <Col>{PRODUCTS.find(product => product.id === item.productId).name}</Col>
            <Col>Options</Col>
            <Col>Quantity (modify)</Col>
            <Col>PriceXQuantity</Col>
            <Col>Remove Item Button</Col>
        </Row>
    );
};

export default CartItem;