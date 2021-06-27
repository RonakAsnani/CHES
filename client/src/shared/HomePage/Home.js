import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getArticles } from "../../actions/articles";
import Banner from "./Banner";
import Articles from "./HomeArticles/Articles";
import PastEvents from "./PastEvents";
import InstagramEmbed from "react-instagram-embed";
import { Carousel } from "3d-react-carousal";
import image from "../../assets/images/Homepage/image.jpg";
import image1 from "../../assets/images/Homepage/image(1).jpg";
import image2 from "../../assets/images/Homepage/image(2).jpg";
import image3 from "../../assets/images/Homepage/image(3).jpg";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  let slides = [
    <a target="_blank" href="https://www.instagram.com/p/CQBmKpbJT2G/">
      <img src={image} alt="1" />
    </a>,
    <a target="_blank" href="https://www.instagram.com/p/CQBmKpbJT2G/">
      <img src={image1} alt="2" />
    </a>,
    <a target="_blank" href="https://www.instagram.com/p/CQA_Ky4JffW/">
      <img src={image2} alt="3" />
    </a>,
    <a target="_blank" href="https://www.instagram.com/p/CN-bM8rJ6LF/">
      <img src={image3} alt="4" />
    </a>,
  ];

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
      <h3 style={{ textAlign: "center" }}>Our Instagram Feed</h3>
      <br />
      <Carousel slides={slides} autoplay={true} interval={3000} arrow={false} />
      <br />
      <br />
    </React.Fragment>
  );
};

export default Home;
