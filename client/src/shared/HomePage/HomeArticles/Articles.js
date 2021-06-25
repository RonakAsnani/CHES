import React from 'react';
import { useSelector } from 'react-redux';

import './Articles.css';

const Articles = () => {

    const articles = useSelector((state) => state.articles);
    console.log(articles);

    return (
        <React.Fragment>
            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-lg-6 mx-auto text-center">
                        <h2 className="article-header">Latest Articles</h2>
                        <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px" }} />
                    </div>
                </div>
                <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6 single-article">
                            {/* <Article /> */}
                        </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 single-article">
                        {/* <Article /> */}
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 single-article">
                        {/* <Article /> */}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Articles
