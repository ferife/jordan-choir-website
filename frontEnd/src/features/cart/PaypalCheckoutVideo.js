import { useState } from "react";
import { Button } from "reactstrap";
import Paypal from "./PayPal";

const PaypalCheckoutVideo = () => {
    const [checkout, setCheckout] = useState(false);

    return (
        <div>
            {checkout ? (
                <Paypal />
            ) : (
                <Button
                    onClick={() => {
                        setCheckout(true);
                    }}
                >
                    Checkout
                </Button>
            )}
        </div>
    );
};

export default PaypalCheckoutVideo;