// Import required libraries and functionalities
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import required styling
import Styles from './dropdownSearchMenu.module.css'; // Import the CSS file

const DropdownSearchMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');
    
        const filteredChildren = React.Children.toArray(children).filter((child) => {
          // Ensure that child.props.children is a string before calling toLowerCase
          if (typeof child.props.children === 'string') {
            return !value || child.props.children.toLowerCase().includes(value.toLowerCase());
          }
          return true;
        });

        return (
            <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
            >
              <Form.Control
                  autoFocus
                  className={`mx-3 my-2 ${Styles.dropdownSearchMenu}`}
                  placeholder="Filter..."
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
              />
              <ul className={`list-unstyled ${Styles.dropdownMenuScroll}`}>
                  {filteredChildren}
              </ul>
            </div>
        );
    },
  );

export default DropdownSearchMenu;