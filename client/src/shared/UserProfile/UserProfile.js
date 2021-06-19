import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Card,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { update } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const userss = useSelector((state) => state.auth);

  const [userData, setUserData] = useState({
    id: user?.result._id,
    email: user?.result.email,
    name: "",
    linkedIn: user?.result.linkedIn,
    selectedFile: "",
  });
  useEffect(() => {
    console.log(userss);
  }, []);
  const clear = () => {
    setUserData({
      id: user?.result._id,
      email: user?.result.email,
      name: "",
      linkedIn: "",
      selectedFile: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    dispatch(update({ ...userData, name: user?.result?.name }));
    clear();
  };

  return (
    <Paper className={classes.paper}>
      <img
        style={{
          height: 100,
          width: 100,
          borderRadius: "50%",
          marginLeft: "38%",
        }}
        src={user?.result.selectedFile}
        alt=""
      />
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <TextField
          name="name"
          variant="outlined"
          label="Name"
          fullWidth
          value={user?.result.name}
          // onChange={(e) => setUserData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="linkedIn"
          variant="outlined"
          label="LinkedIn Id"
          fullWidth
          value={userData.linkedIn}
          onChange={(e) =>
            setUserData({ ...userData, linkedIn: e.target.value })
          }
        />

        <div className={classes.paper1}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setUserData({ ...userData, selectedFile: base64 })
            }
          />
        </div>
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
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}
