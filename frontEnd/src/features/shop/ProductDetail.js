import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
} from "reactstrap";
import { formatPrice } from "../../utils/formatPrice";

const ProductDetail = ({ product }) => {
    // TODO: Add "sold out" function. Account for products that have both sizing and color options having only certain sizing/color combinations sold out. For example, maybe only the white small tshirts are sold out.
    const { image, name, description, price, tiers } = product;

    return (
        <Col md='5' className="m-1">
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    {!tiers && (<CardSubtitle>{formatPrice(price)}</CardSubtitle>)}
                    <CardText>
                        {description}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductDetail;