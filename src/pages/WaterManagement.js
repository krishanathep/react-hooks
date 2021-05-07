import React, { useState, useEffect } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import axios from "axios";

const WaterManagement = () => {
  const [water, setWater] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.nriis.go.th/service/service/OpenData/v1/DataSet/Researcher_WaterManagement"
      );
      setWater(res.data);
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

  if (loading) {
    return (
      <div className="text-center my-5">
        <p>Loading....</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center my-5">
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Water Management</h2>
            <Table bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Organization</th>
                </tr>
              </thead>
              <tbody>
                {water.map((w, index) => {
                  return (
                    <tr key={index}>
                      <td>{w.ProjectID}</td>
                      <td>{w.ProjectName}</td>
                      <td>{w.DepartmentTH}</td>
                      <td>{w.OrganizationTH}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WaterManagement;
