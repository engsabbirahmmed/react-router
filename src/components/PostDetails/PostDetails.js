import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const PostDetails = useLoaderData()
    console.log(PostDetails)
    const {userId, title, body,id} = PostDetails;

    const navigate = useNavigate();
    const authorBtnHandler = () => {
        navigate(`/users/${userId}`)
    }
    return (
        <div>
            <h1>Here is Post : {id}</h1>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={authorBtnHandler}>Author</button>
        </div>
    );
};

export default PostDetails;