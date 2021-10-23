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
import em1 from "../../assets/images/Emanate/EM1.png";
import em2 from "../../assets/images/Emanate/EM2.png";
import em3 from "../../assets/images/Emanate/EM3.png";

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
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-12 mx-auto text-center">
            <h2 className="pastevents-header">Checkout our maiden edition of Emanate <a target="_blank" href="https://issuu.com/ches_svnit/docs/emanate_october_2021">here</a></h2>
            <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px" }} />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-8 mx-auto text-center">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div style={{ maxHeight: "500px" }} class="carousel-inner">
                <div class="carousel-item active">
                  <img style={{ height: "500px" }} class="d-block w-100" src={em1} alt="First slide" />
                </div>
                <div style={{ height: "500px" }} class="carousel-item">
                  <img class="d-block w-100" src={em2} alt="Second slide" />
                </div>
                <div style={{ height: "500px" }} class="carousel-item">
                  <img class="d-block w-100" src={em3} alt="Third slide" />
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <PastEvents />
      <InstagramEmbed
        url="https://www.instagram.com/p/CQC8KxIp88I/"
        clientAccessToken="123|456"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => { }}
        onSuccess={() => { }}
        onAfterRender={() => { }}
        onFailure={() => { }}
      />
      <h3
        style={{
          textAlign: "center",
          fontWeight: "800",
          color: "#264653",
          fontSize: "42px",
        }}
      >
        Our Instagram Feed
      </h3>
      <hr
        style={{
          width: "25%",
          backgroundColor: "#e9c46a",
          height: "4px",
          marginBottom: "30px",
        }}
      />
      <Carousel slides={slides} autoplay={true} interval={3000} arrow={false} />
      <br />
      <br />
    </React.Fragment>
  );
};

export default Home;
