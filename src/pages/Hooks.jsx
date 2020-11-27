import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://hidden-fortress-18421.herokuapp.com/api/food")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // << super import array

  const addFood=()=>{
      alert('Click Button for the Add Food!')
  }

  const updateFood=()=>{
      alert('Click button for the Udate Food!')
  }

  const deleteFood=()=>{
      alert('Click button for the Delete Food!')
  }

  return (
    <div>
    <table>
        <tr>
            <td> Name :</td>
            <td><input type="text" placeholder='Enter your Name'/><br/></td>
        </tr>
        <tr>
            <td>Price :</td>
            <td><input type="text" placeholder='Enter your Price' /><br/></td>
        </tr>
        <tr>
            <td></td>
            <td align='right'><button onClick={()=>addFood()}>SUBMIT</button></td>
        </tr>
    </table>
      <table border='1'>
          <thead>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
          </thead>
            {data.map((item, index)=>(
                <tbody key={index}>
                    <td>{index}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                        <button onClick={()=>updateFood()}>UPDATE</button>{" "}
                        <button onClick={()=>deleteFood()}>DELETE</button>
                    </td>
                </tbody>
            ))}
      </table>
    </div>
  );
};

export default Hooks;
