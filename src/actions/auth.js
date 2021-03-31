import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_PROFILE
} from "./types";
import { setAlert } from "./alert";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import baseUrl from '../utils/baseUrl';

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${baseUrl}/api/auth`);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//Register User
export const register = data => async dispatch => {
  try {
    const res = await axios.post(`${baseUrl}/api/users`, data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    const err = error.response.data.errors;
    if (err) {
      err.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//Login User
export const login = data => async dispatch => {
  try {
    const res = await axios.post(`${baseUrl}/api/auth`, data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    const err = error.response.data.errors;
    if (err) {
      err.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//Logout
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  dispatch({ type: LOGOUT });
};
