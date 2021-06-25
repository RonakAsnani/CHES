import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Blogs() {
  //   const articles = useSelector((state) => state.articles);
  //   console.log(articles);
  //   const tex = articles[0].content;
  //   console.log(tex);

  return (
    <div style={{ marginTop: "100px" }}>
      <button>
        <Link to="/blogs/create">CREATE A BLOG</Link>
      </button>
      {/* <div dangerouslySetInnerHTML={{ __html: tex }}></div> */}
    </div>
  );
}

export default Blogs;
