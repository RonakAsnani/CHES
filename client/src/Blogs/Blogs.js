import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Blogs() {

    const articles = useSelector((state) => state.articles);
    console.log(articles);

    return (
        <div style={{marginTop: "100px"}}>
            <button><Link to="/blogs/create">CREATE A BLOG</Link></button>
        </div>
    )
}

export default Blogs
