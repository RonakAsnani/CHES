import React, { useState } from 'react';
import { Typography, TextField, Button, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from '../shared/UserProfile/styles';
import { createArticle } from '../actions/articles';

function CreateBlog() {

    const [articleData, setArticleData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const dispatch = useDispatch();

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createArticle(articleData))
    }

    return (
        <React.Fragment>
            <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant="h6">CREATE AN ARTICLE</Typography>
                    <TextField
                        name="creator"
                        variant="outlined"
                        label="Creator"
                        fullWidth
                        value={articleData.creator}
                        onChange={(e) => setArticleData({ ...articleData, creator: e.target.value })}
                    />
                    <TextField
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth
                        value={articleData.title}
                        onChange={(e) => setArticleData({ ...articleData, title: e.target.value })}
                    />
                    <TextField
                        name="message"
                        variant="outlined"
                        label="Message"
                        fullWidth
                        value={articleData.message}
                        onChange={(e) => setArticleData({ ...articleData, message: e.target.value })}
                    />
                    <TextField
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={articleData.tags}
                        onChange={(e) => setArticleData({ ...articleData, tags: e.target.value })}
                    />
                    <div className={classes.fileInput}>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setArticleData({ ...articleData, selectedFile: base64 })}
                        />
                    </div>
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
