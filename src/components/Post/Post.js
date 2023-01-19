import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate()
    const detailsBtnHandler = () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h3>{title}</h3>
            <h4>{body}</h4>
            {/* <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link> */}
            <button onClick={detailsBtnHandler}>Show Details</button>
        </div >
    );
};

export default Post;