// Import styling files
import './App.css';

// Import required libraries & functions
import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; // Install components, router, route
import axios from axios

// Utilizing react hooks
const [data, setData] = useState();

function App() {
  useEffect(() => {
    axios.get("http://localhost:5000/main/70").then((response) => {
      setData(response);
    })
  }, [])
  return (
    <div>{data}</div>
  );  
}

export default App;