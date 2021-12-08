import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addRow, editRow } from "../store/actions";
import Swal from "sweetalert2";

const validationSchema = Yup.object().shape({
  API: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Auth: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Description: Yup.string()
    .min(10, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),
  Cors: Yup.string().required("Required"),
  HTTPS: Yup.boolean(),
  Link: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Required"),
});

function FormModal(props) {
  const dispatch = useDispatch();
  const [initialState, setInitialState] = useState({
    API: "",
    Auth: "",
    Category: "",
    Cors: "",
    Description: "",
    HTTPS: false,
    Link: "",
  });

  useEffect(() => {
    if (props.data) {
      setInitialState(props.data);
    }
  }, [props.data]);

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title} Row</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              if (props.title === "Add") {
                dispatch(addRow(values));
                Swal.fire("Added!", "", "success");
              } else {
                dispatch(editRow({ data: values, index: props.index }));
                Swal.fire("Edited!", "", "success");
              }
              setSubmitting(false);
              props.handleClose();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>API</Form.Label>
                      <Form.Control
                        type="text"
                        name="API"
                        onChange={handleChange}
                        value={values.API}
                        // defaultValue={initialState.API}
                        style={
                          errors.API &&
                          touched.API && { border: "1px solid red" }
                        }
                      />
                      {errors.API && touched.API ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.API}
                        </div>
                      ) : null}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Auth</Form.Label>
                      <Form.Control
                        type="text"
                        name="Auth"
                        onChange={handleChange}
                        value={values.Auth}
                        // defaultValue={initialValues.Auth}
                        style={
                          errors.Auth &&
                          touched.Auth && { border: "1px solid red" }
                        }
                      />
                      {errors.Auth && touched.Auth ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.Auth}
                        </div>
                      ) : null}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <Form.Group className="mb-3">
                      <Form.Label>Link</Form.Label>
                      <Form.Control
                        type="text"
                        name="Link"
                        onChange={handleChange}
                        value={values.Link}
                        // defaultValue={initialValues.Link}
                        style={
                          errors.Link &&
                          touched.Link && { border: "1px solid red" }
                        }
                      />
                      {errors.Link && touched.Link ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.Link}
                        </div>
                      ) : null}
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        type="text"
                        name="Category"
                        onChange={handleChange}
                        value={values.Category}
                        // defaultValue={initialValues.Category}
                        style={
                          errors.Category &&
                          touched.Category && { border: "1px solid red" }
                        }
                      />
                      {errors.Category && touched.Category ? (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.Category}
                        </div>
                      ) : null}
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="Description"
                    onChange={handleChange}
                    value={values.Description}
                    // defaultValue={initialValues.Description}
                    style={
                      errors.Description &&
                      touched.Description && { border: "1px solid red" }
                    }
                  />
                  {errors.Description && touched.Description ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.Description}
                    </div>
                  ) : null}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Cors</Form.Label>
                  <br />
                  <Form.Check
                    inline
                    label="Yes"
                    name="Cors"
                    type="radio"
                    value="yes"
                    id="inline-radio-1"
                    onChange={handleChange}
                    checked={
                      values.Cors === "yes"
                      //   initialValues.Cors === "yes"
                    }
                  />
                  <Form.Check
                    inline
                    label="No"
                    name="Cors"
                    type="radio"
                    value="no"
                    id="inline-radio-2"
                    onChange={handleChange}
                    checked={
                      values.Cors === "no"
                      //    initialValues.Cors === "no"
                    }
                  />
                  {errors.Cors && touched.Cors ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.Cors}
                    </div>
                  ) : null}
                </Form.Group>
                <Form.Check
                  inline
                  label="HTTPS"
                  name="HTTPS"
                  type="checkbox"
                  id="inline-checkbox-1"
                  onChange={handleChange}
                  checked={
                    values.HTTPS
                    //  initialValues.HTTPS
                  }
                />
                {errors.HTTPS && touched.HTTPS ? (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {errors.HTTPS}
                  </div>
                ) : null}
                <Modal.Footer>
                  <Button variant="secondary" onClick={props.handleClose}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    {props.title}
                  </Button>
                </Modal.Footer>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default FormModal;
