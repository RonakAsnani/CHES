import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/images/CHES-LOGO-1.png";
import NearMeIcon from "@material-ui/icons/NearMe";
import meghal from "../../assets/images/profiles/Meghal.png";
import jaggu from "../../assets/images/jogender.jpg";
import sarita from "../../assets/images/sarita.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: "85%",
    margin: "auto",
    marginTop: "150px",
    marginBottom: "100px",
  },
  root1: {
    maxWidth: "85%",
    margin: "auto",
    marginTop: "40px",
    marginBottom: "10px",
  },
  media: {
    height: "20%",
    width: "30%",
    margin: "auto",
  },
  media1: {
    height: "170px",
    width: "170px",
    borderRadius: "50%",
    margin: "5px auto",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea style={{ textAlign: "center" }}>
          <img
            className={classes.media}
            src={logo}
            alt="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="body" color="textSecondary" component="h6">
              Chemical Engineering Society (ChES) is a student chapter of the
              chemical engineering department, SVNIT. The faction provides a
              platform for the chemical engineering community of SVNIT where
              they can discuss, plan, execute and debug their problems among
              their peers. Events and seminars conducted by ChES focus on both
              the building the public understanding of technical issues and the
              individual curiosity of the enthusiasts.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="h6">
              Dr. Meghal Desai is currently the faculty advisor of the student
              chapter. Affiliated to the American Institute of Chemical
              Engineering (AIChE), ChES aims of spreading knowledge and
              experience to the future chemical engineers about chemical
              engineering education and application.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <h4
        style={{
          textAlign: "center",
          marginTop: "105px",
          marginBottom: "20px",
        }}
      >
        Our Faculty Advisors
      </h4>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Card style={{ margin: "0px 10px" }}>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media1}
                src={jaggu}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Dr. Jogender Singh</h5>
                <p>Co-Chairman</p>
                <p>Assistant Professor at ChED, SVNIT</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-sm-12 col-md-4">
          <Card style={{ margin: "0px 10px" }}>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media1}
                src={meghal}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Dr. Meghal Desai</h5>
                <p>Chairman</p>
                <p>Associate Professor at ChED, SVNIT</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-sm-12 col-md-4">
          <Card style={{ margin: "0px 10px" }}>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media1}
                src={sarita}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Dr. Sarita Kalla</h5>
                <p>Co-Chairman</p>
                <a target="_blank" href="https://www.linkedin.com/company/chemical-engineering-society-svnit/?viewAsMember=true">
                <i className="fa fa-linkedin"></i>
                </a>
                <p>Assistant Professor at ChED, SVNIT</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <h4
        style={{
          textAlign: "center",
          marginTop: "105px",
          marginBottom: "20px",
        }}
      >
        Core Team 2021-22
      </h4>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Card style={{ margin: "0px 10px" }}>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media1}
                src={jaggu}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Dr. Jogender Singh</h5>
                <p>Co-Chairman</p>
                <p>Assistant Professor at ChED, SVNIT</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="col-sm-12 col-md-4">
          <Card style={{ margin: "0px 10px" }}>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media1}
                src={meghal}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Dr. Meghal Desai</h5>
                <p>Chairman</p>
                <p>Associate Professor at ChED, SVNIT</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-sm-12 col-md-4">
          <Card style={{ margin: "0px 10px" }}>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media1}
                src={sarita}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Dr. Sarita Kalla</h5>
                <p>Co-Chairman</p>
                <p>Assistant Professor at ChED, SVNIT</p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <Card className={classes.root1}>
        <h4 style={{ textAlign: "center", marginTop: "5px" }}>Our Mission</h4>

        <CardActionArea>
          <CardContent>
            <Typography variant="body" color="textSecondary" component="li">
              Promote excellence in chemical engineering education and practice.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="li">
              Advance the development and exchange of relevant knowledge and
              ideas.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="li">
              Facilitate public understanding of technical issues.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="li">
              Integrate the upliftment of society by providing awareness about
              different technical situations.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="li">
              Anticipate, recognize, and evaluate hazardous conditions and
              practices affecting people, property and the environment, develop
              and evaluate appropriate strategies for the same.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
