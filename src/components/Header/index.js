import React from "react";
import "./style.less";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

const Header = () => {
    return (
        <div className='header'>
            <NavLink className='logo' to='/'>
                Movie Ticket
            </NavLink>
            <div className='right-nav'>
                <NavLink className='nav-item' to='/movies'>
                    Movies
                </NavLink>
                <NavLink className='nav-item' to='/theaters'>
                    Theaters
                </NavLink>
                <NavLink className='nav-item' to='/sign-up'>
                    <Button type='primary'>Sign Up</Button>
                </NavLink>
                <NavLink className='nav-item' to='/sign-in'>
                    <Button>Sign In</Button>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
