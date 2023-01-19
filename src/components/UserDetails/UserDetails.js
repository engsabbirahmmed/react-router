import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UserDetails.css'

const UserDetails = () => {
    const userDetail = useLoaderData()
    // console.log(userDetail);
    const {name, email, phone} = userDetail;
    return (
        <div className='user-details'>
            <h3>Details About : <span className='user-name'>{name}</span></h3>
            <h3>Email : {email}</h3>
            <h3>Phone : {phone}</h3>
            <h4>Everything you need to know about this Person</h4>
        </div>
    );
};

export default UserDetails;