// Import styling files
import './App.css';

// Import required libraries & functions
import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; // Install components, router, route
import axios from 'axios';

// Import required pages and components
import HomePage from "./pages/Home/homepage.js";
import Maps from "./pages/Map/googlemaps.js";

  
function App() {  
  // Utilizing react hooks
  const [data, setData] = useState();

  // useEffect(() => {
  //   axios.get("http://localhost:5000/scrape/70").then((response) => {
  //     // Set data object to contain HTML obtained from the url
  //     setData(response.data);  
  //     console.log(data);
  //   })
  // }, []);
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/">
              <Route path = "" exact element={<Navigate to="home" />} />
              <Route path = "home" exact element={<HomePage/>} />
              <Route path = "googlemaps/:busNumber/:direction" exact element={<Maps/>} />
            </Route>
          </Routes>
        </Router>
      </div>
  );  
}

export default App;