import React, { useState } from 'react';
import { Typography, TextField, Button, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import QuillEditor from './Editor/QuillEditor';
import useStyles from '../shared/UserProfile/styles';
import { createArticle } from '../actions/articles';

function CreateBlog() {

    const [message, setMessage] = useState("");
    const [files, setFiles] = useState([]);

    const dispatch = useDispatch();

    const classes = useStyles();

    const onFilesChange = (files) => {
        setFiles(files);
    }

    const onEditorChange = (value) => {
        setMessage(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const variables = {
            content: message,
            creator: "Pranav"
        }
        console.log(variables);
        dispatch(createArticle(variables));
    }


    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <Typography variant="h6">CREATE AN ARTICLE</Typography>
                <QuillEditor
                    placeholder={"Start Posting Something!"}
                    onEditorChange={onEditorChange}
                    onFilesChange={onFilesChange}
                />
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                </form>
            </Paper>

            {/* <div className="container" style={{ marginTop: "30px" }}>
                <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-lg-8 mx-auto text-center">
                             
                    </div>
                </div>
            </div> */}



        </React.Fragment>
    )
}

export default CreateBlog
