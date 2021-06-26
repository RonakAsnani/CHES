import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getArticles } from "../../actions/articles";
import Banner from "./Banner";
import Articles from "./HomeArticles/Articles";
import PastEvents from "./PastEvents";
import InstagramEmbed from "react-instagram-embed";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Banner />
      {/* <Articles /> */}
      <PastEvents />
      <InstagramEmbed
        url="https://www.instagram.com/p/CQC8KxIp88I/"
        clientAccessToken="123|456"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </React.Fragment>
  );
};

export default Home;
