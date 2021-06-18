import React from 'react';
import { Link } from 'react-router-dom';

import articleImg from '../../../assets/images/siphon/siphon (1).jpeg';
import './Article.css';

const Article = () => {
    return (
        <div class="card border-0">
            <img src={articleImg} alt="" class="card-img" />
            <div class="card-body">
                <h4 class="card-title">
                    Wicked Brownie
                </h4>
                <small style={{ marginBottom: "10px" }}>14 June 2021</small>
                <p>All you need is love. But a little chocolate now and then doesn't
                    hurt.</p>
                <Link className="single-blog-button" to="/blog/id">READ MORE</Link>
            </div>
        </div>
    )
}

export default Article
