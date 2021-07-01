import { AUTH, UPDATE } from "../constants/actionTypes";

import * as api from "../api/index.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const signin = (formData, history) => async (dispatch) => {
  const notify = () => toast("Wow so easy!");
  try {
    const { data } = await api.signIn(formData);

    dispatch({
      type: AUTH,
      data,
    });

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    console.log("erc");
    const { data } = await api.signUp(formData);

    dispatch({
      type: AUTH,
      data,
    });

    history.push("/");
  } catch (error) {
    console.log(error, "hello");
  }
};

export const update = (userData) => async (dispatch) => {
  try {
    //console.log("hgcjhg");
    const data = await api.update(userData);
    // console.log(data, "jykjvykjv");
    dispatch({
      type: UPDATE,
      data,
    });
  } catch (error) {
    console.log(error, "hello");
  }
};
