import './EmptySearchResults.css'
import React from "react";

function EmptySearchResults({searchValue}){
    return( 
        <p className="EmptySearchResults-text">There are <span className="not-matching">not matching</span> tasks with "{searchValue}"</p>
    );
};

export { EmptySearchResults };