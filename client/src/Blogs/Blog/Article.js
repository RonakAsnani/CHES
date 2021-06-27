import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteArticle, likeArticle } from "../../actions/articles";
import useStyles from "./styles";

const Article = ({ likes, article, setCurrentId }) => {
  const [noLikes, setLikes] = React.useState(likes);
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const updateData = () => {
    setCurrentId(article._id);
    history.push("/blogs/create");
  };

  const classes = useStyles();
  const content = truncate(`${article.message}`, 250);

  const openArticle = () => {
    history.push(`/blogs/${article._id}`);
  };

  return (
    <Card className={classes.card}>
      <ButtonBase className={classes.cardAction} onClick={openArticle}>
        <CardMedia
          className={classes.media}
          image={
            article.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={article.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">By:- {article.name}</Typography>
          <Typography variant="body2">
            {moment(article.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.overlay2}></div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {article.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {article.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <Link to="/blogs/id">Read More</Link>
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likeArticle(article._id));
            setLikes(noLikes + 1);
          }}
        >
          <ThumbUpAltIcon fontSize="small" /> Like {noLikes}{" "}
        </Button>
        {user && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteArticle(article._id))}
          >
            <DeleteIcon fontSize="small" /> Delete
          </Button>
        )}
        {/* {user && (
          <Button style={{ color: "black" }} size="small" onClick={updateData}>
            <MoreHorizIcon fontSize="default" />
            <Link to="/create"></Link>
          </Button>
        )} */}
      </CardActions>
    </Card>
  );
};

export default Article;
