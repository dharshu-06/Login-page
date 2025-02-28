
import React from 'react';
import "./Login.css"
import { replace } from 'react-router-dom';
function Login() {
  var userdata = [
    {username:"dharshu",passcode:123,cart: []},
    {username:'suba',passcode:124,cart: []},
  {username:"shalu",passcode:125,cart:[]},
  ];
  const signup =()=>{
    var username = document.getElementById("username").value;
    var passcode = document.getElementById("passcode").value;
    var activeuserdetail = userdata.filter((data) =>{
      return username == data.username;
    });
    console.log(activeuserdetail);
    if(activeuserdetail.length>0){
      if(activeuserdetail[0].passcode == passcode){
        localStorage.setItem("username",activeuserdetail[0].username);
        window.location.replace("/Home");
  }
      else{
        console.log("wrong password");
      }
    }
  };
      
    return (
      
      <div class="main">
        <h1>Login</h1>
        <div className="border"> 
        <h4><big>Name:</big></h4>
          <input type="text" placeholder="Enter your Name" id="username"/>
          <h3>Password:</h3>
          <input type="text" placeholder= "Enter your Password" id="passcode"/>
          <button id="one" onClick={signup}>submit</button>
          <p>Aleady have an account?<a href='#'>signup</a></p>
          </div>
  </div>
    );
  }
export default Login;
