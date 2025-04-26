import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  InputGroup,
  Row,
  Container,
  Toast,
  ToastContainer
} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

function Contact() {
  const [showToast, setShowToast] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required('First name is required')
    .min(3, 'First name must be at least 3 characters'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    mobile: yup
      .string()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile number is required'),
    carName: yup.string().required('Car name is required'),
    model: yup.string().required('Model is required'),
    price: yup
      .number()
      .typeError('Price must be a number')
      .positive('Price must be positive')
      .required('Price is required'),
    buyingOption: yup.string().required('Please select a buying option'),
    terms: yup.bool().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <Container className='my-5'>
      <h1 className="mb-4">Contact Us</h1>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Form submitted successfully!</Toast.Body>
        </Toast>
      </ToastContainer>

      <Formik
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          console.log('Form values:', values);
          setShowToast(true);
          resetForm();
        }}
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          mobile: '',
          carName: '',
          model: '',
          price: '',
          buyingOption: '',
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={touched.firstName && !!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={touched.lastName && !!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="username">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={touched.username && !!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="mobile">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter 10-digit number"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  isInvalid={touched.mobile && !!errors.mobile}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.mobile}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6" controlId="buyingOption">
                <Form.Label>Buying Option</Form.Label>
                <Form.Select
                  name="buyingOption"
                  value={values.buyingOption}
                  onChange={handleChange}
                  isInvalid={touched.buyingOption && !!errors.buyingOption}
                >
                  <option value="">-- Select Option --</option>
                  <option value="buy">Buy Now</option>
                  <option value="finance">Finance</option>
                  <option value="lease">Lease</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.buyingOption}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="carName">
                <Form.Label>Car Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Car Name"
                  name="carName"
                  value={values.carName}
                  onChange={handleChange}
                  isInvalid={touched.carName && !!errors.carName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.carName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="model">
                <Form.Label>Model</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Model"
                  name="model"
                  value={values.model}
                  onChange={handleChange}
                  isInvalid={touched.model && !!errors.model}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.model}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  isInvalid={touched.price && !!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="terms">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={touched.terms && !!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
              />
            </Form.Group>

            <Button type="submit" className="mt-2">Submit Form</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default Contact;
