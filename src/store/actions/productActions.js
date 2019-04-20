import * as actions from "./actions";
import { baseUrl } from "../../configuration";
import Axios from "axios";

export const getAll = () => {
  return dispatch => {
    Axios.get(`${baseUrl}/products/`)
      .then(res => {
        const productsArr = [];
        for (const key in res.data) {
          productsArr.push({
            id: res.data[key]._id,
            name: res.data[key].name,
            image: res.data[key].image,
            pricea: res.data[key].pricea,
            priceb: res.data[key].priceb,
            discription: res.data[key].discription,
            category: res.data[key].category,
            addedBy: res.data[key].addedBy
          });
        }
        return dispatch({
          type: actions.GET_ALL,
          payload: productsArr
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getuserProducts = userid => {
  return dispatch => {
    Axios.get(`${baseUrl}/products/user/${userid}`).then(res => {
      const productsArr = [];
      for (const key in res.data) {
        productsArr.push({
          id: res.data[key]._id,
          name: res.data[key].name,
          image: res.data[key].image,
          pricea: res.data[key].pricea,
          priceb: res.data[key].priceb,
          discription: res.data[key].discription,
          category: res.data[key].category,
          addedBy: res.data[key].addedBy

        });
      }
      return dispatch({ type: actions.GET_USER_PRODUCTS, payload:res.data});

    });
  };
};

export const remove = id => {
  return dispatch => {
    Axios.delete(`${baseUrl}/products/${id}`, {
      headers:{
        Authorization: localStorage.getItem("token")
      }
    })
      .then(res => {
        return dispatch({
          type: actions.REMOVE,
          payload: id
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getById = id => {
  return dispatch => {
    Axios.get(`${baseUrl}/products/${id}`).then(res => {
      return dispatch({
        type: actions.SHOW_DETAILS,
        payload: res.data
      });
    });
  };
};

export const add = product => {
  return dispatch => {
    Axios.post(`${baseUrl}/products/`, product).then(res => { 
      return dispatch({ 
        type: actions.ADD,
        payload: res.data
      });
    });
  };
};
