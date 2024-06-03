// Import styling files
import './App.css';

// Import required libraries & functions
import React, { Component, useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; // Install components, router, route

// Import required pages and components
import HomePage from "./pages/Home/homepage.js";
import Maps from "./pages/Map/googlemaps.js";
  
function App() {

  // End point routing for client side
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/">
              <Route path = "" exact element={<Navigate to="googlemaps/0/1" />} />
              <Route path = "home" exact element={<HomePage/>} />
              <Route path = "googlemaps/" exact element={<Maps/>}>
                <Route path=':busNumber/:direction' exact element={<Maps/>}/>
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
  );  
}

export default App;