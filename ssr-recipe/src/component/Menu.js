import React from "react";
import { Link } from "react-router-dom";

const Menu=()=>{
    return(
        <ul>
            <li>
                <Link to='Blue'>Blue</Link>
            </li>
            <li>
                <Link to='Red'>Red</Link>
            </li>
        </ul>
    );
};

export default Menu;