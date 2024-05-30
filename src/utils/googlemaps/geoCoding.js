// Import required library and functions
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// Uses googleMaps Geocoding API to convert string addresses to best match transit stations for that address in place_id string format
const GMapsGeoCoding = async (busStops) =>{
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    const obtainLatLng = async () =>{

        // To obtain place_id
        for(let i=0; i<busStops.length; i++){

            //--------------------------- IMPORTANT: REQUIRED 'BUS STOP + ROAD' COMPONENT -------------------------------------- //
            const address = busStops[i]['Bus Stop + Road'];
            const baseRequestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

            // Loop through and obtain matching address data for each string address.
            const response = await axios.get(baseRequestUrl);
            const data = response.data;
            
            // Iterate through 'address_components' and identify the place_id & latLng of the iteration that 'types' contain 'transit_station'
            for(let j=0; j<data['results'].length; j++){
                if(data['results'][j]['types'].includes('transit_station') && data['results'][j]['partial_match']){
                    const placeID = data['results'][j]['place_id'];

                    // Create new field in array entry called 'placeID' and append placeID value to it
                    busStops[i]['placeID'] = placeID;
                    break;
                };
            };
            

        }

        return busStops;
    }

    const updatedBusStops = await obtainLatLng();

    // Returns the updated array with new 'placeID' field populated
    return updatedBusStops;
}


export default GMapsGeoCoding;  