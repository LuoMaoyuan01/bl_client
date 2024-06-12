// Import required libraries and functionalities
import React, {useState, forwardRef} from 'react';

// Import required styles
import Styles from './searchForm.module.css';

const SearchForm = forwardRef((props, ref) => {

  // Default value
  let busNumberSearchValue = 'Bus No';

  // Check is a valid input has been set for busNumberSearchValueRef
  if(ref.current !== null){
    busNumberSearchValue = ref.current;
  }

  return (
    <form className={Styles.form}>
      {/* Search Button */}
      <button aria-label="Search">
        <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="searchIconTitle">
          <title id="searchIconTitle">Search</title>
          <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
      
      {/* Input Field */}
      <input className={Styles.input} placeholder={busNumberSearchValue} required={false} type="text" ref={ref}/>
    </form>
  );
});

export default SearchForm;