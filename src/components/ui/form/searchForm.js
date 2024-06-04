// Import required libraries and functionalities
import React, {useState, forwardRef} from 'react';

// Import required styles
import Styles from './searchForm.module.css';

const SearchForm = forwardRef((props, ref) => {


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
      <input className={Styles.input} placeholder="Enter A Bus Number" required={false} type="text" ref={ref}/>

      {/* Reset Button */}
      <button className={Styles.reset} type="reset" aria-label="Clear search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </form>
  );
});

export default SearchForm;