import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const IndexNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/category"
      );
      console.log(res.data);
      setNews(res.data);
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
      <div className="text-center mt-3 my-3">
        <p>loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-3 my-3">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Link to="/news/createnews" className="btn btn-success mt-2 my-2">
          News Create
        </Link>
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((n, index) => {
              return (
                <tr key={n.id}>
                  <td>{n.id}</td>
                  <td>{n.name}</td>
                  <td width="30%">
                    <Button variant="info">View</Button> <Button>Edit</Button>{" "}
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

export default IndexNews;
