import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
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
    setFoods(res.data)
    } catch (error) {
      console.log(error);
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return <p>loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <h1>Foods Page!</h1>
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, index) => (
              <tr key={food._id}>
                <td>{index}</td>
                <td>{food.name}</td>
                <td>{food.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Foods;
