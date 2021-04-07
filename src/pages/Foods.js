import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://mongo-express-server.herokuapp.com/api/foods"
      );
      console.log(res.data);
      setFoods(res.data);
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

  if (loading === true) {
    return (
      <div className="text-center mt-5 my-5">
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 my-5">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่!</p>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <h1>Foods Page</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => {
              return (
                <tr key={food._id}>
                  <td>{index}</td>
                  <td>{food.name}</td>
                  <td>{food.price}</td>
                  <td width="25%">
                    <Button>View</Button>{" "}
                    <Button variant="success">Update</Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Foods;