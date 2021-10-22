import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import Icon from "./icon";
import { AUTH } from "../../constants/actionTypes";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  secretKey: "",
};

const Auth = (props) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  // const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        dispatch(signup(formData, history));

        // const user = JSON.parse(localStorage.getItem("profile"));
        // props.setUser(user);
        // history.push("/");
        // setOpen(true);
        // setTimeout(() => {
        //   history.push("/");
        // }, 4000);
      } else {
        dispatch(signin(formData, history));
        // setOpen(true);
        // setTimeout(() => {
        //   history.push("/");
        // }, 4000);
      }
    } catch (error) {
      alert(error.message);
    }

  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () =>
    setShowPassword((prevShowPasssword) => !prevShowPasssword);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  // function Alert(props) {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }

  // const handleClose = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }

  //   history.push("/");

  //   setOpen(false);
  // };

  return (
    <Container className={classes.containerForm} component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon style={{ backgroundColor: "#023047" }} />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Input
              name="name"
              label="Name"
              handleChange={handleChange}
              autoFocus
            />
            {
              isSignUp && (
              <Input
                name="title"
                label="Title"
                handleChange={handleChange}
                type="text"
              />
            )
            }
            {
              isSignUp && (
              <Input
                name="title"
                label="Title"
                handleChange={handleChange}
                type="text"
              />
            )
            }
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
            {isSignUp && (
              <Input
                name="secretKey"
                label="Enter the Key"
                handleChange={handleChange}
                type="text"
              />
            )}
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Authentication Successfull
            </Alert>
          </Snackbar> */}

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
