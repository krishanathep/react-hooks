import React, { useState, useEffect } from 'react'
import { Container, Table, Image, Badge, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'
import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://api.codingthailand.com/api/course')
    //console.log(res.data)
    setProducts(res.data.data)
  };

  useEffect(()=>{
    getData()
  })

  return (
    <div className='mt-3 my-3'>
      <Container>
        <h2>Products</h2>
        <Table bordered hover>
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Detail</th>
            <th>Create At</th>
            <th>View</th>
            <th>Picture</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {products.map((product, index)=>(
            <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.detail}</td>
            <td>{product.date}</td>
            <td><Badge pill variant='info'>{product.view}</Badge></td>
            <td><Image src={product.picture} thumbnail width={100} /></td>
            <td>
              <Link to={`/detail/${product.id}/title/${product.title}`} className='btn btn-primary'>View</Link>{' '}
              <Button variant='success'>Cart</Button>
            </td>
          </tr>
          ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Products;
