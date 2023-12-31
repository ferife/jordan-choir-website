import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const ToCartButton = () => {
    return (
        <Link to='/shop/cart'>
            <Button> <i className='fa fa-shopping-cart' /> Cart</Button>
        </Link>
    );
};

export default ToCartButton