import React, { useState, useEffect } from "react";
import { Container, CardDeck, Card, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useHistory } from "react-router-dom";
import { format } from 'date-fns'
import axios from "axios";

const Detail = () => {
  const { id, title } = useParams();
  const history = useHistory()

  const [details, setDetails] = useState([]);

  const getData = async (id) => {
    const res = await axios.get("https://api.codingthailand.com/api/course/"+ id,)
    setDetails(res.data.data);
  };

  useEffect(() => {
    getData(id);
  },[id]);

  return (
    <div className='mt-3 my-3'>
      <Container>
        <Button onClick={()=>{history.goBack()}}>Go Back</Button>
        <h2>{title} - {id}</h2>
        <Row>
          <CardDeck>
            {details.map((detail, index) => {
              return (
                <div className="col-md-4 mt-3" key={detail.id}>
                  <Card>
                    <Card.Body>
                      <Card.Title>{detail.ch_title}</Card.Title>
                      <Card.Text>{format(new Date(detail.ch_dateadd), 'dd-MMM-yyyy')}</Card.Text>
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
