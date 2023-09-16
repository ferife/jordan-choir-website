//cSpell: ignore formik
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, FormGroup, InputGroup, Label } from "reactstrap";
import { validateAddToCartForm } from "../../utils/validateAddToCartForm";
import { useDispatch } from "react-redux";
import { addCartItem } from "../cart/cartItemsSlice";

const AddToCartForm = ({ product }) => {

    const dispatch = useDispatch();

    // TODO: If the user is trying to add something to the cart that is identical (including all options) to something already in the cart, either do not allow them or just modify the quantity of the existing item accordingly
    const handleSubmit = (values, { resetForm }) => {
        // console.log('The form has been submitted');
        // console.log('form values:', values);
        // console.log('in JSON format', JSON.stringify(values));
        const cartItem = {
            id: crypto.randomUUID(),
            productId: parseInt(product.id),
            price: (product.tiers ? product.tiers.find((tier) => tier.id === parseInt(values.tier)) : product.price),
            size: values.size,
            color: values.color,
            tier: values.tier,
            quantity: values.quantity,
            dateTimeAdded: new Date(Date.now()).toISOString()
        }
        // console.log(cartItem);
        dispatch(addCartItem(cartItem));
    };
    return (
        <Col >
            <Formik
                initialValues={{
                    size: (product.sizes ? 'Not Selected' : 'N/A'),
                    color: (product.colors ? 'Not Selected' : 'N/A'),
                    tier: (product.tiers ? 'Not Selected' : 'N/A'),
                    quantity: (!product.tiers ? 1 : 0)
                }}
                onSubmit={handleSubmit}
                validate={validateAddToCartForm}
            >
                <Form>
                    <FormGroup row>
                        <Col md='2'></Col>
                        {product.sizes && (
                            <Col md='4'>
                                <InputGroup>
                                    <Field className='form-control' name='size' as='select'>
                                        <option key={crypto.randomUUID()} value='Not Selected'>Select Size</option>
                                        {product.sizes.map((option) => {
                                            return (
                                                <option key={crypto.randomUUID()} value={option.name}>{option.name}</option>
                                            );
                                        })}
                                    </Field>
                                    <ErrorMessage name='size'>
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </InputGroup>
                            </Col>
                        )}
                        {product.colors && (
                            <Col md='4'>
                                <InputGroup>
                                    <Field className='form-control' name='color' as='select'>
                                        <option key={crypto.randomUUID()} value='Not Selected'>Select Color</option>
                                        {product.colors.map((option) => {
                                            return (
                                                <option key={crypto.randomUUID()} value={option.name}>{option.name}</option>
                                            );
                                        })}
                                    </Field>
                                    <ErrorMessage name='color'>
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </InputGroup>
                            </Col>
                        )}
                        {product.tiers && (
                            <Col md='4'>
                                <InputGroup>
                                    <Field className='form-control' name='tier' as='select'>
                                        <option key={crypto.randomUUID()} value='Not Selected'>Select Tier</option>
                                        {product.tiers.map((option) => {
                                            return (
                                                <option key={crypto.randomUUID()} value={option.name}>{'$' + option.price + ' - ' + option.name}</option>
                                            );
                                        })}
                                    </Field>
                                    <ErrorMessage name='tier'>
                                        {(msg) => <p className="text-danger">{msg}</p>}
                                    </ErrorMessage>
                                </InputGroup>
                            </Col>
                        )}
                    </FormGroup>
                    <FormGroup row>
                        {/* TODO: Allow some products with tiers to change quantity (ex: reagan choir mums) */}
                        {/* TODO: Create Modal for the Sponsorships to allow for entering in the info required to make the sponsorship happen */}
                        {!product.tiers && (
                            <InputGroup>
                                <Label htmlFor="quantity" md='2'>Quantity</Label>
                                <Col md='8'>
                                    <Field className='form-control' name='quantity' type='number' min='1' />
                                </Col>
                            </InputGroup>
                        )}
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type='submit' color='primary'>
                                Add to Cart
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </Formik>
        </Col>
    );
};

// import { useState } from "react";
// import { Button, ButtonGroup } from "reactstrap";

// const ProductRadio = ({ product }) => {
//     const [activeId, setActiveId] = useState(0);

//     return (
//         <>
//             <ButtonGroup vertical={product[0].price}>
//                 {product.map((option) => {
//                     const addPriceToButton = option.price ? '$' + option.price + ' - ' : '';
//                     return (
//                         <Button onClick={() => setActiveId(option.id)} active={activeId === option.id}>
//                             {addPriceToButton + option.name}
//                         </Button>
//                     );
//                 })}
//             </ButtonGroup>
//         </>
//     );
// };

// export default ProductRadio;

export default AddToCartForm;