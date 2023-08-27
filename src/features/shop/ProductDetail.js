import { 
    Button,
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Input,
    InputGroup
} from "reactstrap";
import { formatPrice } from "../../utils/formatPrice";
import ProductRadio from "./ProductRadio";

const ProductDetail = ({ product }) => {
    // TODO: Set Special formats for selling clothes vs merch items (such as pop sockets) vs donations
    // TODO: Add "sold out" function. Account for products that have both sizing and color options having only certain sizing/color combinations sold out. For example, maybe only the white small tshirts are sold out.
    const { image, name, description, price, sizes, colors, tiers } = product;
    return (
        <Col md='12' className="m-4">
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{formatPrice(price)}</CardSubtitle>
                    <CardText>
                        {description}
                        {sizes && (
                            <>
                                <hr />
                                Size: <ProductRadio options={sizes} />
                            </>
                        )}
                        {colors && (
                            <>
                                <hr />
                                Color: <ProductRadio options={colors} />
                            </>
                        )}
                        {tiers && (
                            <>
                                <hr />
                                Tiers: <ProductRadio options={tiers} />
                            </>
                        )}
                        {!tiers && (
                            <>
                                <hr />
                                <InputGroup>
                                    <Input placeholder='Quantity' type='number' step='1' />
                                </InputGroup>
                            </>
                        )}
                        <hr />
                        <Button>Add to Cart</Button>
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductDetail;