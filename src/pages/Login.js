import React from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

function Login() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    terms: yup.bool().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <h3 className="text-center mb-4">User Login</h3>
        <Col md={4} className="border border-2 rounded p-4 shadow-sm">
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              console.log("Login values:", values);
              // Add API call or logic here
            }}
            initialValues={{
              userName: "",
              password: "",
              terms: false,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="userName"
                    value={values.userName}
                    onChange={handleChange}
                    isValid={touched.userName && !errors.userName}
                    isInvalid={!!errors.userName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.userName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Check
                    required
                    name="terms"
                    label="Agree to terms and conditions"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    feedback={errors.terms}
                    feedbackType="invalid"
                  />
                </Form.Group>

                <p className="text-center mt-4">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-decoration-none">
                    Register here
                  </Link>
                </p>

                <Button type="submit" className="w-100">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
