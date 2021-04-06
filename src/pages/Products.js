import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  Image,
  Badge,
  Button,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      //console.log(res.data)
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //set loading
  if (loading === true) {
    return (
      <div className="text-center mt-3">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  //set error
  if (error) {
    return (
      <div className="text-center mt-3">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <div className="mt-3 my-3">
      <Container>
        <h2>Products</h2>
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Detail</th>
              <th>Create At</th>
              <th>View</th>
              <th>Picture</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.detail}</td>
                <td>{format(new Date(product.date), "dd-MMM-yyyy")}</td>
                <td>
                  <Badge pill variant="info">
                    {product.view}
                  </Badge>
                </td>
                <td>
                  <Image src={product.picture} thumbnail width={100} />
                </td>
                <td>
                  <Link
                    to={`/detail/${product.id}/title/${product.title}`}
                    className="btn btn-primary"
                  >
                    View
                  </Link>{" "}
                  <Button variant="success">Add to Cart</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Products;
