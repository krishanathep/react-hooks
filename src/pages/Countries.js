import React, { useState, useEffect } from "react";
import { Container, Table, Image, Form } from "react-bootstrap";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
      setCountries(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  if (loading) {
    return (
      <div className="text-center mt-5 my-3">
        <p>loading...</p>
      </div>
    );
  }

  if(error){
    return (
      <div className="text-center mt-5 my-3">
        <p>เกิดข้อผิดพลากจาก SERVER กรุณาลองใหม่อีกครั้ง</p>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4 my-3'>Contries List</h1>
        <Form className="mt-3 my-3">
          <Form.Control
            type="text"
            placeholder="Search Countries"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form>
        <Table bordered>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Region</th>
            <th>Sub Region</th>
            <th>capital</th>
            <th>Population</th>
            <th>Code</th>
            <th>Native</th>
          </tr>
          {filteredCountries.map((c, index) => {
            return (
              <tr key={c.name}>
                <td><Image src={c.flag} thumbnail width="100" /></td>
                <td>{c.name}</td>
                <td>{c.region}</td>
                <td>{c.subregion}</td>
                <td>{c.capital}</td>
                <td>{c.population}</td>
                <td>{c.numericCode}</td>
                <td>{c.nativeName}</td>
              </tr>
            );
          })}
        </Table>
      </Container>
    </div>
  );
};

export default Countries;
