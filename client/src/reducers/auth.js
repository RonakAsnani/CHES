import { AUTH, LOGOUT, UPDATE } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case UPDATE:
      const user = JSON.parse(localStorage.getItem("profile"));
      user.result = { ...action?.data.data };
      localStorage.setItem("profile", JSON.stringify(user));
      console.log(JSON.parse(localStorage.getItem("profile")));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};

export default authReducer;
