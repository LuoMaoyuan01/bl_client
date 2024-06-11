// BusStopsContext.js

// Context that enables busStops data defined in Maps component to be available throughout the Maps nested components, without the use of props drilling
import React, { createContext, useState } from 'react';

const BusStopsContext = createContext();

// Provider component that manages busStops data
// value available to all children components nested within provider
export const BusStopsProvider = ({ children }) => {
    const [busStops, setBusStops] = useState([]);
    return (
        <BusStopsContext.Provider value={{ busStops, setBusStops }}>
            {children}
        </BusStopsContext.Provider>
    );
};

export default BusStopsContext;
