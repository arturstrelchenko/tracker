import React from 'react';
import { NavLink} from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header__link">
                <NavLink to='/list' activeClassName="selected" exact >List of tracked</NavLink>
            </div>
            <div className="header__link">
                <NavLink to='/' exact activeClassName="selected">Tracker</NavLink>
            </div>
        </div>
    );
};

export default Header;