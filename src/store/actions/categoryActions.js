import * as actions from "./actions";
import { baseUrl } from "../../configuration";
import Axios from "axios";


export const getCategById = categoryName => {
    return dispatch => {
      Axios.get(`${baseUrl}/category/${categoryName}`).then(res => {
        return dispatch({
          type: actions.GET_CATEGORY_PRODUCTS,
          payload: res.data
        });
      });
    };
  };