import React, { useState, useEffect } from "react";
import { Container, CardDeck, Card, Row, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useHistory } from "react-router-dom";
import { format } from "date-fns";
import axios from "axios";

const Detail = () => {
  const { id, title } = useParams();
  const history = useHistory();

  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      setDetails(res.data.data);
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
      <div className="text-center mt-3">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

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
        <Button
          onClick={() => {
            history.goBack();
          }}
        >
          Go Back
        </Button>
        <h2>
          {title} - {id}
        </h2>
        <Row>
          <CardDeck>
            {details.map((detail, index) => {
              return (
                <div className="col-md-4 mt-3" key={detail.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{detail.ch_title}</Card.Title>
                      <Card.Text>
                        {format(new Date(detail.ch_dateadd), "dd-MMM-yyyy")}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default Detail;
