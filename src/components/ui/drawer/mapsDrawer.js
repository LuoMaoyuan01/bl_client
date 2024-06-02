// Import required libraries and functions
import React, { useState } from 'react';

// Import required components
import MapsCheckbox from '../checkbox/mapsCheckbox';
import SubmitBtn from '../buttons/submitBtn';

// Import required styles
import Styles from './mapsDrawer.module.css';

const MapsDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    // MapsDrawer is responsive

    return (
        <div>
            <button
                className={Styles.toggleButton}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Drawer"  // Accessible label for screen readers
            >
                <div></div> {/* This div represents the middle line */}
            </button>

            <div className={`${Styles.drawer} ${isOpen ? Styles.drawerOpen : ''}`}>
                <div className={Styles.content}>
                    <button
                        className={Styles.closeButton}
                        onClick={() => setIsOpen(false)}
                    >
                        &#x2715; {/* Represents the X */}
                    </button>
                    <h1 className="tw-text-lg tw-font-bold">Display Options</h1>
                    <ul style = {{paddingBottom : '1.5vw'}}>
                        <li className={Styles.entry}><MapsCheckbox/><p className={Styles.text}>Bus Stops</p></li>
                        <li className={Styles.entry}>Link 2</li>
                        <li className={Styles.entry}>Link 3</li>
                    </ul>
                    <SubmitBtn/>
                </div>
            </div>
        </div>
    );
};

export default MapsDrawer;

