import React from 'react';
import {BrowserRouter, Routes,Route, Router} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

const Pages = () => {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/Home" element={<Home/>}/>
</Routes>
 </BrowserRouter>
   
  );
};

export default Pages;