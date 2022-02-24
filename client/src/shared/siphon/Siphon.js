import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/images/Siphon.png";
import NearMeIcon from "@material-ui/icons/NearMe";
import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./siphon.css";
import elementals from '../../assets/images/Siphon 7.0/elementals.png';
import terni from '../../assets/images/Siphon 7.0/terni.png';
import bgmi from '../../assets/images/Siphon 7.0/bgmi.png';
import fanatic from '../../assets/images/Siphon 7.0/fanatic.png';
import startupsy from '../../assets/images/Siphon 7.0/startupsy.png';
import periodic from '../../assets/images/Siphon 7.0/periodic.png';
import industrivia from '../../assets/images/Siphon 7.0/industrivia.png';
import siphon1 from '../../assets/images/siphon/siphon1.jpeg';
import siphon2 from '../../assets/images/siphon/siphon2.jpeg';
import siphon3 from '../../assets/images/siphon/siphon3.jpeg';
import siphon4 from '../../assets/images/siphon/siphon4.jpeg';
import siphon5 from '../../assets/images/siphon/siphon5.jpeg';
import siphon6 from '../../assets/images/siphon/siphon6.png';
import siphon7 from '../../assets/images/siphon/siphon7.png';
import siphon8 from '../../assets/images/siphon/siphon8.png';


const useStyles = makeStyles({
  root: {
    maxWidth: "85% ",
    margin: "auto",
    marginTop: "150px",
    marginBottom: "100px",
  },
  root1: {
    width: "300px",

    marginTop: "10px",
    marginBottom: "10px",
  },
  media: {
    height: "200px",
    width: "200px",
    margin: "auto",
  },
  media2: {
    height: "200px",
    width: "100%",
    margin: "auto",
  },
});

export default function Siphon() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row" style={{ marginBottom: "30px" }}>
            <div className="col-lg-12 mx-auto text-center">
              <h2 className="pastevents-header">About Siphon</h2>
              {/* <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px" }} /> */}
            </div>
          </div>
        </div>
        <CardActionArea style={{ textAlign: "center" }}>
          <CardContent>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <img
                  className={classes.media}
                  src={logo}
                  alt="Contemplative Reptile"
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <p style={{ marginTop: "10px" }}>
                  Siphon is the annual departmental fest of Chemical Engineering
                  Deartment, SVNIT. It is a two day fest, organised in the first
                  month of even semester. Events under Siphon are planned to
                  improve the general chemical knowlege of the masses through
                  games like Murder-Mystery, Bid-Wisely, The Lucky Element,
                  Chemical Tambola. Other events like Starch Walk, Plasti-Psycho
                  are pure fun games with a chemical twist. Many of the events
                  have cash prizes up for grab.
                </p>
                <p>
                  The Chem-E-Car, and other teams representing SVNIT in other
                  institues conduct their workshops as well duing Siphon.
                </p>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>

      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-12 mx-auto text-center">
            <h2 className="pastevents-header">Glimpses of Siphon</h2>
            {/* <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px" }} /> */}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-8 mx-auto text-center">
            <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={siphon1}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={siphon2}
                  alt="Second slide"
                />
              </Carousel.Item>
              {/* <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={siphon3}
                  alt="Third slide"
                  style={{ height: "800px" }}
                />
              </Carousel.Item> */}
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={siphon4}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={siphon5}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={siphon6}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={siphon7}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={siphon8}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-12 mx-auto text-center">
            <h2 className="pastevents-header">Siphon 7.0</h2>
            <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px", margin: "auto" }} />
          </div>
        </div>
      </div>

      {/* backgroundColor: "#1D3334" */}

      <div className="container" style={{ marginTop: "50px", maxWidth: "inherit", position: "relative", textAlign: "center" }}>
        <div className="row" style={{ marginBottom: "30px", backgroundColor: "#1D3334", height: "600px" }}>
          <div style={{ position: "absolute", textAlign: "center", margin: "auto", top: "60px" }} className="col-lg-12 text-center">
            <div className="container">
              <div className="row">
                <ReactPlayer style={{ margin: "auto" }} controls url='https://www.youtube.com/watch?v=QnzT2RI5UcA' />
              </div>
              <div style={{ marginTop: "30px" }} className="row">
                <h1 style={{ color: "white" }}>Get ready for the <b>ELECTRIFYING, BREATHTAKING FLAGSHIP</b> event!!!</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "50px" }}>
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-lg-12 mx-auto text-center">
            <h2 className="pastevents-header">Events</h2>
            {/* <hr style={{ width: "25%", backgroundColor: "#e9c46a", height: "4px", margin: "auto" }} /> */}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "30px", marginBottom: "50px" }}>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '18rem', margin: "50px" }}>
              <Card.Img variant="top" src={elementals} />
              <Card.Body>
                <Card.Title>ELEMENTALS</Card.Title>
                <Button variant="primary"><a target="_blank" href="https://dare2compete.com/competition/elementals-siphon-70-sardar-vallabhbhai-national-institute-of-technology-svnit-surat-267117?lb=gjUqKDn">REGISTER</a></Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '18rem', margin: "50px" }}>
              <Card.Img variant="top" src={terni} />
              <Card.Body>
                <Card.Title>TERNI LAPILLI</Card.Title>
                <Button variant="primary"><a target="_blank" href="https://dare2compete.com/competition/terni-lapilli-siphon-70-sardar-vallabhbhai-national-institute-of-technology-svnit-surat-267183?lb=gjUqKDn">REGISTER</a></Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '18rem', margin: "50px" }}>
              <Card.Img variant="top" src={industrivia} />
              <Card.Body>
                <Card.Title>INDUSTRIVIA</Card.Title>
                <Button variant="primary"><a target="_blank" href="https://dare2compete.com/competition/industrivia-siphon-70-sardar-vallabhbhai-national-institute-of-technology-svnit-surat-267403?lb=gjUqKDn">REGISTER</a></Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '18rem', margin: "50px" }}>
              <Card.Img variant="top" src={bgmi} />
              <Card.Body>
                <Card.Title>BGMI WARRIORS</Card.Title>
                <Button variant="primary"><a href="https://dare2compete.com/creative-cultural-event/bgmi-warriors-siphon-70-sardar-vallabhbhai-national-institute-of-technology-svnit-surat-267461?lb=gjUqKDn" target="_blank">REGISTER</a></Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '18rem', margin: "50px" }}>
              <Card.Img variant="top" src={startupsy} />
              <Card.Body>
                <Card.Title>STARTUPSY</Card.Title>
                <Button variant="primary"><a target="_blank" href="https://dare2compete.com/competition/startupsy-siphon-70-sardar-vallabhbhai-national-institute-of-technology-svnit-surat-267643?lb=gjUqKDn">REGISTER</a></Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card style={{ width: '18rem', margin: "50px" }}>
              <Card.Img variant="top" src={periodic} />
              <Card.Body>
                <Card.Title>PERIODIC MERAKI</Card.Title>
                <Button variant="primary"><a target="_blank" href="https://dare2compete.com/competition/periodic-meraki-siphon-70-sardar-vallabhbhai-national-institute-of-technology-svnit-surat-267842?lb=gjUqKDn">REGISTER</a></Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Card style={{ margin: "auto", width: '18rem' }}>
              <Card.Img variant="top" src={fanatic} />
              <Card.Body>
                <Card.Title>FANATIC DARE</Card.Title>
                <Button variant="primary"><a target="_blank" href="https://dare2compete.com/competition/fanatic-dare-siphon-70-sardar-vallabhbhai-national-institute-of-technology-svnit-surat-267889?lb=gjUqKDn">REGISTER</a></Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

    </div>
  );
}
