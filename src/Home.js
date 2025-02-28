
import React from 'react'
import Navbar from"./Navbar";
import Productlist from "./Productlist";

const Home = () => {
  return (
    <div> <Navbar/>
    <h1>Welcome to the Home Page</h1>
    <Productlist/>
    </div>
  );
};

export default Home;