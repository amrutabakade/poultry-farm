import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Order = (props) => {
  const [val,setVal] = useState(0);

  const getVal =(e)=>{
    setVal(e.target.value);
  }
  return <>
     <h1>Place Your Order {props.title}</h1>
     <form action="">
      <p>550 rs per kg</p>
      <label htmlFor="quantity"> Enter Quantity For Chicken &nbsp;</label>
      <input type="number" id="quantity" value={val} name="quantity" min="1" max="100" onChange={getVal}></input>
      <br/>
      <br/>
      <NavLink to ="" className="btn btn-outline-info">Pay {550*val} rs</NavLink>
     </form>
  </>
};

export default Order;
