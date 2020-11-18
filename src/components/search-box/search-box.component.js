import React from 'react';
import './search-box.style.css'

const SearchField  = ({placeholder, handleChange}) =>{

    return(
    <div>
       <input 
       className='search' 
       type='search'
       placeholder={placeholder} 
       onChange={handleChange}/>

   </div>) 
}

export default SearchField;