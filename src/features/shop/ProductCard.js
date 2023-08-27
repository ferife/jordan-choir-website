import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { formatPrice } from "../../utils/formatPrice";


const ProductCard = ({ product }) => {
    const { id, image, name, price, tiers } = product;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    {tiers && (
                        <CardSubtitle>from {formatPrice(price)}</CardSubtitle>
                    )}
                    {!tiers && (
                        <CardSubtitle>{formatPrice(price)}</CardSubtitle>
                    )}
                </CardBody>
            </Card>
        </Link>
    );
};

export default ProductCard;