import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/images/Siphon.png";
import logo1 from "../../assets/images/siphon/siphon (5).jpeg";
import NearMeIcon from "@material-ui/icons/NearMe";

import "./siphon.css";

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
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>About Siphon</h2>
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
      <h4 style={{ textAlign: "center" }}>Siphon Down the Lane</h4>
      <div
        className="card-slider"
        style={{ display: "flex", overflowX: "scroll" }}
      >
        <div className="root1">
          <Card>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media2}
                src={logo1}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Siphon 6.0</h5>
                <p>
                  The Chem-E-Car, and other teams representing SVNIT in other
                  institues conduct their workshops as well duing Siphon.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="root1">
          <Card>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media2}
                src={logo1}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Siphon 5.0</h5>
                <p>
                  The Chem-E-Car, and other teams representing SVNIT in other
                  institues conduct their workshops as well duing Siphon.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="root1">
          <Card>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media2}
                src={logo1}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Siphon 4.0</h5>
                <p>
                  The Chem-E-Car, and other teams representing SVNIT in other
                  institues conduct their workshops as well duing Siphon.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="root1">
          <Card>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media2}
                src={logo1}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Siphon 3.0</h5>
                <p>
                  The Chem-E-Car, and other teams representing SVNIT in other
                  institues conduct their workshops as well duing Siphon.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="root1">
          <Card>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media2}
                src={logo1}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Siphon 2.0</h5>
                <p>
                  The Chem-E-Car, and other teams representing SVNIT in other
                  institues conduct their workshops as well duing Siphon.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className="root1">
          <Card>
            <CardActionArea style={{ textAlign: "center" }}>
              <img
                className={classes.media2}
                src={logo1}
                alt="Contemplative Reptile"
              />
              <CardContent>
                <h5>Siphon 1.0</h5>
                <p>
                  The Chem-E-Car, and other teams representing SVNIT in other
                  institues conduct their workshops as well duing Siphon.
                </p>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
