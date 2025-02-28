import React from "react";
import image1 from "./headphones.jpg";
import image2 from "./watch.jpg";
import image3 from "./speaker.jpg";
import image4 from "./wireheadphones.jpg";

const products=[
    { id:1, name:"Wireless Headphones",price:200,description:"High quality Sound",image:image1},
    { id:2, name:"Smartwatch",price:300,description:"Track your fitness and durable SmartWatch",image:image2},
     {id:3, name:"Bluetooth Speaker",price:200,description:"Portable Bluetoothspeaker",image:image3},
    { id:4, name:"wire headphones",price:100,description:"Attached to an audio source by cable",image:image4}
];
const Productlist=()=>{
    return(
        <div className="product-list">
    {products.map((product)=>{
        return<div key={product.id}
        className="product">
        <h3>{product.name}</h3>
        <img src={product.image}
        alt={product.name}
        style={{width:"150px",height:"150px"}}/>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button>Add to cart</button>
    </div>
    })}
        </div>
    );
};
export default Productlist;
