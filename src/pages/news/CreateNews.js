import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("ชื่อหมวดหมู่ห้ามว่าง"),
});

const CreateNews = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    //console.log(data);
    const apiUrl = "https://api.codingthailand.com/api/category";
    const resp = await axios.post(apiUrl, {
      name: data.name,
    });
    alert(resp.data.message); //บันทึกข้อมูลเรียบร้อย
    history.replace("/category");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Create News</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="name">
                <Form.Label>หมวดหมู่ข่าว</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  ref={register}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                />
                {errors.name && (
                  <Form.Control.Feedback type="invalid">
                    {errors.name.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>

              <Button className="mb-3" type="submit">
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreateNews;
