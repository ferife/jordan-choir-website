import { useEffect, useRef } from "react";

const Paypal = () => {

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, error) => {
                return actions.order.createOrder({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: 'ENTER DESC',  //TODO: Order descriptions
                            amount: {
                                currency_code: "USD",
                                value: 650.00       //TODO: Change this number based on charge
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture;
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default Paypal;