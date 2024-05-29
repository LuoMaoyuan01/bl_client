// Import required library and functions
import React, {useState, useEffect} from 'react';
import axios from 'axios';

// uses googleMaps Geocoding API to convert string addresses to best match transit stations for that address in place_id string format
// Template api request URL : https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

const GMapsGeoCoding = async (importedBusStops) =>{
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    console.log(importedBusStops);

    const obtainLatLng = async () =>{

        // To obtain place_id
        for(let i=0; i<importedBusStops.length; i++){
            const address = importedBusStops[i]['Bus Stop + Road'];
            const baseRequestUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

            // Loop through and obtain matching address data for each string address.
            const response = await axios.get(baseRequestUrl);
            const data = response.data;
            
            // Iterate through 'address_components' and identify the place_id & latLng of the iteration that 'types' contain 'transit_station'
            for(let j=0; j<data['results'].length; j++){
                if(data['results'][j]['types'].includes('transit_station') && data['results'][j]['partial_match']){
                    const placeID = data['results'][j]['place_id'];
                    importedBusStops[i]['placeID'] = placeID;
                    break;
                };
            };

            // Assign placeID to a field in the busStops data array called 'placeID'
            

        }

        // Go To LTA xml file and use bus stop number to obtain latLng of bus stops

        return importedBusStops;
    }

    const updatedBusStops = await obtainLatLng();

    return updatedBusStops;
}


export default GMapsGeoCoding;  