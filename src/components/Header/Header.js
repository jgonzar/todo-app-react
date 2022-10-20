import React, { Children } from "react";


function Header ({children}){
    return ( 
        <header>
            {children}
        </header>
    );
};

export { Header };