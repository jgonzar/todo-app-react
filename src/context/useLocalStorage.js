import React, {useState, useEffect} from "react";

function useLocalStorage(itemName, initialValue){

    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
  
    useEffect(()=>{
      setTimeout(()=>{
      try{
        
          const localStorageItem = localStorage.getItem(itemName, []);
    
          let parsedItem;
    
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }
        catch(error){
          setError(true);
          console.log(error);
        }
      }, 3000)
    });
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      }catch(error){
        setError(true);
        console.log(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  };

  export { useLocalStorage };