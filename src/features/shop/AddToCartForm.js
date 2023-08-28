//cSpell: ignore formik
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, FormGroup, InputGroup, Label } from "reactstrap";
import { validateAddToCartForm } from "../../utils/validateAddToCartForm";

const AddToCartForm = ({ product }) => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('The form has been submitted');
        console.log('form values:', values);
        console.log('in JSON format', JSON.stringify(values));
        resetForm();
    };
    return (
        <Col >
            <Formik
                initialValues={{
                    size: (product.sizes ? 'Not Selected' : 'Not Required'),
                    color: (product.colors ? 'Not Selected' : 'Not Required'),
                    tier: (product.tiers ? 'Not Selected' : 'Not Required'),
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
                            {/* TODO: Add functionality to "Add to Cart" button */}
                            <Button type='submit' color='primary' onClick={console.log('Button Pressed')}>
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