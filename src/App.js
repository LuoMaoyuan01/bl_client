// Import styling files
import './App.css';

// Import required libraries & functions
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'; // Install components, router, route
// import reactToWebComponent from 'react-to-webcomponent';

// Import required pages and components
import HomePage from "./pages/Home/homepage.js";
import Maps from "./pages/Map/googlemaps.js";

// Import required Provider for context
import { BusStopsProvider } from './context/busStopsContext.js';
import { MapProvider } from './context/mapContext';
import { MapStateProvider } from './context/mapStateContext';
import { EmsClickProvider } from './context/simulation/emsClickContext.js';
  
function App() {

  // End point routing for client side
  return (
    <div className="App">
      <Router>
        <BusStopsProvider>
          <MapProvider>
            <MapStateProvider>
              <EmsClickProvider>
                <Routes>
                  <Route path="/">
                    <Route path = "" exact element={<Navigate to="googlemaps/0/1" />} />
                    <Route path = "home" exact element={<HomePage/>} />
                    <Route path = "monitor/home" exact element={<Maps/>} />
                    <Route path = "googlemaps/" exact element={<Maps/>}>
                      <Route path=':busNumber/:direction' exact element={<Maps/>}/>
                    </Route>
                  </Route>
                </Routes>
              </EmsClickProvider>
            </MapStateProvider>
          </MapProvider>
        </BusStopsProvider>
      </Router>
    </div>
  );  
}

export default App;

// Building of the custom react component bundle
// const BLClientComponent = reactToWebComponent(App, React, ReactDOM, { basePath: '/' });
// if (!customElements.get('bl-client-component')) {
//   customElements.define('bl-client-component', BLClientComponent);
//   console.log('Custom element defined: bl-client-component');
// }