import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive}) => isActive ?  'active' : undefined} to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/shop'>Shop</NavLink>
            <NavLink to='/products'>Products</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/policy'> Our Policy</NavLink>
        </div>
    );
};

export default Header;