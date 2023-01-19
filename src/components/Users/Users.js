import React from 'react';
import './Users.css'
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData()
    
    return (
        <div>
            <h2>Our Regular Users</h2>
            <div className='users'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;