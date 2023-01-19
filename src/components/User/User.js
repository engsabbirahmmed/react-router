import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
    const {id, name, email, username} = user;
    const userStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle} className='user-basic'>
            <h3>Name : {name}</h3>
            <p>Email : {email}</p>
            <small>User Name : <Link to={`/users/${id}`}>{username}</Link> </small>
        </div>
    );
};

export default User;