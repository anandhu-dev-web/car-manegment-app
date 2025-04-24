import React from "react";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../redux/userSlice";

function Register() {
  const { Formik } = formik;
  const{users}=useSelector((state)=>state.users)
  console.log(users);
  
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    userName: yup.string().required("Username is required"),
    email: yup.string().required("Email is required"),
    password: yup.string().required("Password is required"),
    terms: yup.bool().oneOf([true], "Terms must be accepted"),
  });

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <h3 className="text-center mb-4">User Register</h3>
        <Col md={6} lg={4} className="border border-2 rounded p-4 shadow-sm m-3 m-md-0">
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              // console.log("Login values:", values);
              dispatch(userRegister({...values, id: Date.now()}));
            }}
            initialValues={{
              fullName: "",
              userName: "",
              email: "",
              password: "",
              terms: false,
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationFormik01">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    isValid={touched.fullName && !errors.fullName}
                    isInvalid={!!errors.fullName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationFormik02">
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
                <Form.Group className="mb-3" controlId="validationFormik03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationFormik04">
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
              
                <Form.Group className="mb-3" controlId="validationFormik05">
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

export default Register;