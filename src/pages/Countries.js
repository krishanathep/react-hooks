import React, { useState, useEffect } from "react";
import { Container, Table, Image, Form } from "react-bootstrap";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  if(loading){
      return(
          <div className='text-center mt-5 my-3'>
              <p>loading...</p>
          </div>
      )
  }

  return (
    <div>
      <Container>
        <h1>Contries List</h1>
        <Form className="mt-2 my-2">
          <Form.Control
            type="text"
            placeholder="Search Countries"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <Table>
          <tr>
            <th>Falg</th>
            <th>Name</th>
          </tr>
          {filteredCountries.map((c, index) => {
            return (
              <tr key={c.name}>
                <td>{c.name}</td>
                <td>
                  <Image src={c.flag} thumbnail width="100" />
                </td>
              </tr>
            );
          })}
        </Table>
      </Container>
    </div>
  );
};

export default Countries;
