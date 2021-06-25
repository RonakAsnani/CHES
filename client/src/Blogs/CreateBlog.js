import React, { useState, useEffect } from 'react';
import { Typography, TextField, Button, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import QuillEditor from './Editor/QuillEditor';
import useStyles from '../shared/UserProfile/styles';
import { createArticle, updateArticle } from '../actions/articles';

function CreateBlog({ currentId, setCurrentId }) {

    const history = useHistory();
    const article = useSelector((state) => currentId ? state.articles.find((a) => a._id === currentId) : null);
    console.log(article);
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const [content, setContent] = useState("");
    const [files, setFiles] = useState([]);
    const dispatch = useDispatch();
    const classes = useStyles();

    const onFilesChange = (files) => {
        setFiles(files);
    }

    const onEditorChange = (value) => {
        setContent(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(postData);
        if (currentId) {
            dispatch(updateArticle(currentId, postData));
        } else {
            dispatch(createArticle(postData));
        }
        alert("Article Submitted");
        history.push("/");
    }

    useEffect(() => {
        setPostData({ ...postData, message: content });
    }, [content])

    useEffect(() => {
        if (article) {
            setPostData(article);
        }
    }, [article])

    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }


    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">{currentId ? 'EDIT' : 'CREATE'} AN ARTICLE</Typography>
                    <TextField
                        name="creator"
                        variant="outlined"
                        label="Creator"
                        fullWidth
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                    />
                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                    <QuillEditor
                        placeholder={"Start Posting Something!"}
                        onEditorChange={onEditorChange}
                        onFilesChange={onFilesChange}
                    />
                    <TextField
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                    />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                        />
                    </div>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </form>
            </Paper>



        </React.Fragment>
    )
}

export default CreateBlog
