import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
    return (
        <div style={{marginTop: "100px"}}>
            <button><Link to="/blogs/create">CREATE A BLOG</Link></button>
        </div>
    )
}

export default Blogs
