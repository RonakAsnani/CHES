import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Card,
  CardMedia,
  Menu,
  MenuItem,
} from "@material-ui/core";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { update } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Fade from "@material-ui/core/Fade";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import "./profile.css";

export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const classes = useStyles();
  const dispatch = useDispatch();
  const userss = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (e) => {
    setUserData({ ...userData, batchOf: e.target.value });
  };

  const [userData, setUserData] = useState({
    id: user?.result._id,
    email: user?.result.email,
    name: "",
    linkedIn: user?.result.linkedIn,
    position: user?.result.position,
    batchOf: user?.result.batchOf,
    selectedFile: "",
  });
  useEffect(() => {
    console.log(user);
  }, []);
  const clear = () => {
    setUserData({
      id: user?.result._id,
      email: user?.result.email,
      position: user?.result.position,
      batchOf: user?.result.batchOf,
      name: "",
      linkedIn: user?.result.linkedIn,
      selectedFile: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(userData);
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          className="full-line"
        >
          <div className="position-selector">
            <TextField
              name="position"
              variant="outlined"
              label="Position"
              fullWidth
              value={userData?.position}
              onChange={(e) =>
                setUserData({ ...userData, position: e.target.value })
              }
            />
          </div>
          <div className="batch-selector">
            <InputLabel
              style={{ width: "100%" }}
              className="batch-selector"
              value={userData?.batchOf}
              id="demo-mutiple-name-label"
            ></InputLabel>

            <Select
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              onChange={handleChange}
              input={<Input />}
            >
              <MenuItem value="2024">2024 </MenuItem>
              <MenuItem value="2023">2023 </MenuItem>
              <MenuItem value="2022">2022 </MenuItem>
              <MenuItem value="2021">2021 </MenuItem>
              <MenuItem value="2020">2020 </MenuItem>
              <MenuItem value="2019">2019 </MenuItem>
              <MenuItem value="2018">2018 </MenuItem>
            </Select>
          </div>
        </div>

        <br />
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
          style={{ backgroundColor: "#1D3334", color: "white" }}
          size="large"
          type="submit"
          fullWidth
        >
          Update
        </Button>
      </form>
    </Paper>
  );
}
