import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

import { getArticles } from "../actions/articles";
import Article from "./Blog/Article";

function Blogs({ setCurrentId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  const articles = useSelector((state) => state.articles);

  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-6 mx-auto text-center">
            <h2 className="article-header">Articles</h2>
            <hr
              style={{
                width: "25%",
                backgroundColor: "#e9c46a",
                height: "4px",
              }}
            />
          </div>
        </div>
        {!articles.length ? (
          <div
            style={{
              padding: "5px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <div className="row">
            {articles.map((post) => {
              return (
                <div
                  style={{ marginBottom: "20px" }}
                  key={post._id}
                  className="col-lg-4 col-md-6 col-sm-12 single-article"
                >
                  <Article
                    likes={post.likeCount}
                    article={post}
                    setCurrentId={setCurrentId}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* <div dangerouslySetInnerHTML={{ __html: tex }}></div> */}
    </div>
  );
}

export default Blogs;
