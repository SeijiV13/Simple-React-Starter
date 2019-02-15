import React from 'react';
import {NavLink} from 'react-router-dom';



const Header = () => {

    return(
          
        <div className="header">
        <nav>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            { " | " }
            <NavLink to="/about" activeClassName="active">About</NavLink>
            { " | " }
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
        </nav>
        </div>
    )
}

export default Header;