import axios from "axios";
import { baseUrl } from "../../configuration";
import * as actions from "./actions";

export const register = user => {
  return dispatch => {
    axios.post(`${baseUrl}/users/`, user).then(res => {
      return dispatch({ type: actions.REGISTER, payload: res.data });
    });
  };
};

export const login = credintials => {
  return dispatch => {
    axios.post(`${baseUrl}/users/authenticate`, credintials).then(res => {
      return dispatch({ type: actions.LOGIN, payload: res.data });
    });
  };
};

export const authenticate = (userId, token) => {
  return { type: actions.AUTH, payload: { userId, token } };
};

export const logOut = () => {
  localStorage.clear()
  return { type: actions.LOG_OUT };
};

export const getById = id => {
  return dispatch => {
    axios.get(`${baseUrl}/users/authenticate${id}`).then(res => {
      return dispatch({ type: actions.GET_BY_ID, payload: res.data });
    });
  };
};
