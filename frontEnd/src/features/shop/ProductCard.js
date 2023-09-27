import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { formatPrice } from "../../utils/formatPrice";


const ProductCard = ({ product }) => {
    const { id, image, name, price, tiers} = product;

    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg src={image} alt={name} />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    {tiers && (
                        <CardSubtitle>
                            from {formatPrice(tiers.reduce(function(cheapestTier, tier) {return tier.price < cheapestTier.price 
                                ? tier 
                                : cheapestTier}, tiers[0]).price)}
                        </CardSubtitle> 
                    )}
                    {price && (
                        <CardSubtitle>{formatPrice(price)}</CardSubtitle>
                    )}
                </CardBody>
            </Card>
        </Link>
    );
};

export default ProductCard;