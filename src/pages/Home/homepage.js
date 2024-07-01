// Import styling files
import './homepage.css';


// Import required components
import Loader3D from '../../components/ui/loaders/loader3D';

// Import required library and functions
import React from 'react';


function HomePage() {

    return(
        <div style={{width: '100%', height: '100%'}}>
            <Loader3D/>
        </div>
    )
}

export default HomePage;