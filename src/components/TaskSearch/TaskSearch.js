import './TaskSearch.css';
import React from 'react';


function TaskSearch({searchValue, setSearchValue, loading}){
  
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    
    return(
        <input 
        className="taskSearch"
        placeholder='Task search' 
        value={searchValue}
        onChange={onSearchValueChange} 
        disabled={loading}
          />  
    )
}

export { TaskSearch };