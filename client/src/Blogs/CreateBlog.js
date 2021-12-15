import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Paper } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import QuillEditor from "./Editor/QuillEditor";
import useStyles from "../shared/UserProfile/styles";
import { createArticle, updateArticle } from "../actions/articles";

function CreateBlog({ currentId, setCurrentId }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const article = useSelector((state) =>
    currentId ? state.articles.find((a) => a._id === currentId) : null
  );
  console.log(article);
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    contributors: "",
    tags: "",
    selectedFile: "",
  });
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onFilesChange = (files) => {
    setFiles(files);
  };

  const onEditorChange = (value) => {
    setContent(value);
  };

  console.log(currentId);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(postData);
    if (currentId) {
      dispatch(
        updateArticle(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      dispatch(createArticle({ ...postData, name: user?.result?.name }));
    }
    clear();
    setOpen(true);
    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  useEffect(() => {
    setPostData({ ...postData, message: content });
  }, [content]);

  useEffect(() => {
    if (article) {
      setPostData(article);
    }
  }, [article]);

  const clear = () => {
    setCurrentId(null);
    setPostData({ title: "", message: "", tags: "", selectedFile: "" });
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create Blogs.
        </Typography>
      </Paper>
    );
  }

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    history.push("/");

    setOpen(false);
  };

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h6">
            {currentId ? "EDIT" : "CREATE"} AN ARTICLE
          </Typography>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <QuillEditor
            placeholder={"Start Posting Something!"}
            onEditorChange={onEditorChange}
            onFilesChange={onFilesChange}
          />
          <TextField
            name="contributors"
            variant="outlined"
            label="Contributors"
            fullWidth
            value={postData.contributors}
            onChange={(e) =>
              setPostData({ ...postData, contributors: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) =>
              setPostData({ ...postData, tags: e.target.value.split(",") })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              ARTICLE POSTED!
            </Alert>
          </Snackbar>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Paper>
    </React.Fragment>
  );
}

export default CreateBlog;
