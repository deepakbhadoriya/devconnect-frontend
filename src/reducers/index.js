import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./authReducers";
import profile from "./profile";
import post from "./post";

export default combineReducers({ alert, auth, profile, post });
