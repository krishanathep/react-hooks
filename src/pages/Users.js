import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const apiUri = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(apiUri);
      console.log(res.data);
      setUsers(res.data);
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
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่อีกครั้ง</p>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }
  return (
    <div>
      <Container>
        <h1>Users List</h1>
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td width='25%'>
                      <Link to={`/userdetail/${user.id}/${user.name}`} className='btn btn-info'>View</Link>{' '}
                      <Button>Update</Button>{' '}
                      <Button variant='danger'>Delete</Button>
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

export default Users;
