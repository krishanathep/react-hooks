import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      console.log(res.data);
      setUser(res.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);

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
        <p>Server Error 404!</p>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <h1>User Detail</h1>
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          Go Back
        </Button>
        <Card className="mt-3 my-3">
          <Card.Body>
            <Card.Title>ID : {user.id} </Card.Title>
            <Card.Text>Name : {user.name}</Card.Text>
            <Card.Text>Username : {user.username}</Card.Text>
            <Card.Text>Email : {user.email}</Card.Text>
            <Card.Text>Phone : {user.phone}</Card.Text>
            <Card.Text>Website : {user.website}</Card.Text>
            </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default UserDetail;
