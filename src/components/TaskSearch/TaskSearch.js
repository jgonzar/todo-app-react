import './TaskSearch.css';
import React from 'react';
import { TaskContext } from '../../context';

function TodoSearch(){

    const { searchValue, setSearchValue } = React.useContext(TaskContext);
  
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    return(
        <input onChange={onSearchValueChange} placeholder='Task search' value={searchValue} />  
    )
}

export { TodoSearch };