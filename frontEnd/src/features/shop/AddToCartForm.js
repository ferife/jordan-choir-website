//cSpell: ignore formik
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, FormGroup, InputGroup, Label } from "reactstrap";
import { validateAddToCartForm } from "../../utils/validateAddToCartForm";
import { useDispatch } from "react-redux";
import { addCartItem } from "../cart/cartItemsSlice";
import { formatPrice } from "../../utils/formatPrice";

function initialMods (prod) {

    const initMods = {
        quantity: prod.donation ? 0 : 1,
        modifiers: {}
    };

    if (prod.modifiers) {
        for (const mod in prod.modifiers) {
            initMods.modifiers[prod.modifiers[mod].name] = 'Not Selected';
        }
    };
    return initMods;
};

const AddToCartForm = ({ product }) => {

    // TODO: If the user is trying to add something to the cart that is identical (including all options) to something already in the cart, either do not allow them or just modify the quantity of the existing item accordingly

    const dispatch = useDispatch();

    const handleSubmit = (values) => {

        const cartItem = {
            id: crypto.randomUUID(),
            productId: parseInt(product.id),
            price: (product.tiers ? product.tiers.find((tier) => tier.id === parseInt(values.tier)) : product.price),
            dateTimeAdded: new Date(Date.now()).toISOString(),
            quantity: values.quantity, 
            modifiers: values.modifiers
        }

        dispatch(addCartItem(cartItem));
    };

    return (
        <Col>
            <Formik
                initialValues={initialMods(product)}
                onSubmit={handleSubmit}
                validate={validateAddToCartForm}
            >
                <Form>
                    <FormGroup row>
                        {product.modifiers && (
                            <>
                                {product.modifiers.map((modifier) => {
                                    return (
                                        <Col md='4'>
                                            <InputGroup>
                                                <Field className='form-control' name={'modifiers.' + modifier.name} as='select'>
                                                    <option key={crypto.randomUUID()} value="Not Selected">Select {modifier.name}</option>
                                                    {modifier.options.map((option) => {
                                                        return (
                                                            <option key={crypto.randomUUID()} value={option.name}>{option.name}</option>
                                                        );
                                                    })}
                                                </Field>
                                                <ErrorMessage name={'modifiers.' + modifier.name}>
                                                    {(msg) => <p className="text-danger">{msg}</p>}
                                                </ErrorMessage>
                                            </InputGroup>
                                        </Col>
                                    );
                                })}
                            </>
                        )}
                        {product.tiers && (
                            <>
                                <Col md='4'>
                                    <InputGroup>
                                        <Field className='form-control' name='tier' as='select'>
                                            <option key={crypto.randomUUID()} value="Not Selected">Select Tier</option>
                                            {product.tiers.map((option) => {
                                                return (
                                                    <option key={crypto.randomUUID()} value={option.name}> {formatPrice(option.price)} - {option.name}</option>
                                                );
                                            })}
                                        </Field>
                                    </InputGroup>
                                </Col>
                            </>
                        )}
                        {/* {product.sizes && (
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
                        )} */}
                    </FormGroup>
                    <FormGroup row>
                        {/* TODO: Allow some products with tiers to change quantity (ex: reagan choir mums) */}
                        {/* TODO: Create Modal for the Sponsorships to allow for entering in the info required to make the sponsorship happen */}
                        {!product.donation && (
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

export default AddToCartForm;