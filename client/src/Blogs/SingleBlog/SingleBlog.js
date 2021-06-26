import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getArticle } from '../../actions/articles';
import './SingleBlog.css';

const SingleBlog = () => {

    const [blog, setBlog] = useState(null);
    const article = useSelector((state) => state.articles);
    console.log(article);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getArticle(id));
        setBlog(article);
    }, [id])

    const content = article.message;

    return (
        <div style={{ marginTop: "90px" }}>
            <div className="container p-5">
                <div className="row">
                    <div style={{ textAlign: "center" }} className="col-lg-12 col-md-12">
                        {
                            article.length > 1 ? <CircularProgress /> :
                                (
                                    <div>
                                        <h4>Published By {article.name}</h4>
                                        <h1>{article.title}</h1>
                                        <img src={article.selectedFile} />
                                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog;
