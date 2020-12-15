import React, { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios'
const App = () =>{
const [password,setPassword] =useState([])
const FetshData = async () =>{
  try{
    const {data} = await axios.get('/api/passwords');
    setPassword(data)
  } catch (err) {
    console.log(err)
  }
}
useEffect(()=> {FetshData()},[])
  return(
    <div className="App">
        {/* Render the passwords if we have them */}
        {password.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {/*
                Generally it’s bad to use "index" as a key.
                It’s ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {password.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={FetshData}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No passwords :(</h1>
            <button
              className="more"
              onClick={FetshData}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
export default App;