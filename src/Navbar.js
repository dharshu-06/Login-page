import React from "react";
import "./Style.css"
const Navbar=()=> {
    return (
    <nav className="navbar">
        <div className="logo"><h1>E-Website Shop</h1></div>
        <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
        </ul>
        <input type ="text" placeholder="Search product" className="Search_bar"/>
    </nav>
    );
};
export default Navbar;