import { Col, Row, Container, Form, Button, InputGroup } from "react-bootstrap";
import * as formik from 'formik';
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

function AddProduct() {
  const dispatch = useDispatch();

  const { Formik } = formik;
  const schema = yup.object().shape({
    carName: yup
      .string()
      .required('Car name is required')
      .min(3, 'Car name must be at least 3 characters'),

    imageUrl: yup
      .string()
      .required('Image URL is required')
      .url('Please enter a valid URL'),

    description: yup
      .string()
      .required('Description is required')
      .min(10, 'Description should be at least 10 characters'),

    terms: yup
      .boolean()
      .required()
      .oneOf([true], 'You must accept the terms'),
  });

  return (
    <Container>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          ;
          dispatch(addProduct({...values, id: Date.now()}));
        }}
        initialValues={{
          carName: '',
          imageUrl: '',
          description: '',
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isValid, dirty }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">Add New Car</h3>
            <Row className="justify-content-center my-md-5 my-3">
              <Col md="8" className="border border-2 rounded p-4 shadow-sm">

                <Row>
                  <Form.Group as={Col} md="6" controlId="carName">
                    <Form.Label>Car Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="carName"
                      placeholder="Car Name"
                      value={values.carName}
                      onChange={handleChange}
                      isInvalid={touched.carName && !!errors.carName}
                      isValid={touched.carName && !errors.carName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.carName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6" controlId="imageUrl">
                    <Form.Label>Image URL</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text>URL</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={handleChange}
                        isInvalid={touched.imageUrl && !!errors.imageUrl}
                        isValid={touched.imageUrl && !errors.imageUrl}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.imageUrl}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col} md="12" className="mt-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="description"
                      placeholder="Type car description here..."
                      value={values.description}
                      onChange={handleChange}
                      isInvalid={touched.description && !!errors.description}
                      isValid={touched.description && !errors.description}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.description}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3 mt-4" controlId="terms">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    checked={values.terms}
                    isInvalid={touched.terms && !!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                  />
                </Form.Group>

                <Button type="submit" className="w-100" disabled={!(isValid && dirty)}>
                  Submit Form
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AddProduct;
