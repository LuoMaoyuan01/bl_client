// Import styling files
import './App.css';

// Import required libraries & functions
import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; // Install components, router, route
import axios from 'axios';

function App() {
  // Utilizing react hooks
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:5000/scrape/70").then((response) => {
      // Set data object to contain HTML obtained from the url
      setData(response.data);
    })
  }, []);
  return (
    <div>
      {data ? JSON.stringify(data) : 'Loading...'}
    </div>
  );  
}

export default App;