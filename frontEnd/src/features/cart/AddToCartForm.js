//cSpell: ignore formik
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, FormGroup, InputGroup, Label } from "reactstrap";
import { validateAddToCartForm } from "../../utils/validateAddToCartForm";
import { useDispatch } from "react-redux";
import { addCartItem } from "./cartItemsSlice";
import { formatPrice } from "../../utils/formatPrice";

function initialMods(prod) {

    const initMods = {
        quantity: prod.donation 
            ? 0 
            : 1,
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

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const cartItem = {
            id: crypto.randomUUID(),
            productId: parseInt(product.id),
            price: (product.tiers 
                ? product.tiers.find((tier) => tier.name === values.tier).price 
                : product.price
            ),
            dateTimeAdded: new Date(Date.now()).toISOString(),
            quantity: values.quantity,
            modifiers: values.modifiers,
            tier: (product.tiers 
                ? values.tier 
                : false
            ),
            donation: product.donation
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
                    </FormGroup>
                    <FormGroup row>
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