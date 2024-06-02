// Import required libraries and functions
import React, { useState } from 'react';

// Import required components

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
                    <h1 className="tw-text-lg tw-font-bold">Drawer Menu</h1>
                    <ul>
                        <li className={Styles.link}>Link 1</li>
                        <li className={Styles.link}>Link 2</li>
                        <li className={Styles.link}>Link 3</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MapsDrawer;

