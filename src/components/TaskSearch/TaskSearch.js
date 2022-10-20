import './TaskSearch.css';
import React from 'react';


function TaskSearch({searchValue, setSearchValue}){
  
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    
    return(
        <input onChange={onSearchValueChange} placeholder='Task search' value={searchValue} />  
    )
}

export { TaskSearch };