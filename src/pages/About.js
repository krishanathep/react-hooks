import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [version, setVersion] = useState("");

  const getData = async () => {
    const res = await axios.get("https://api.codingthailand.com/api/version");
    //console.log(res.data)
    setVersion(res.data.data.version);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1>About Page</h1>
      <p>Create by Backend version : {version}</p>
    </Container>
  );
};

export default About;
