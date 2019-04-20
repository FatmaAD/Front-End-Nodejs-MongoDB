import * as actionTypes from "./actions/actions.js";

const initialState = {
  products: [],
  selectedProduct: {
    image: "",
    name: "",
    description: null,
    pricea: 0,
    category: null
  },
  logedInUserData: null,
  authorization: null,
  addedProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //product's action handlers
    case actionTypes.GET_ALL:
      return {
        ...state,
        products: action.payload
      };

    case actionTypes.REMOVE:
      const products = [...state.products];
      const index = products.findIndex(
        product => product.id === action.payload
      );
      products.splice(index, 1);
      return {
        ...state,
        products
      };

    case actionTypes.SHOW_DETAILS:
      console.log(action.payload);
      return {
        ...state,
        selectedProduct: action.payload
      };

    case actionTypes.ADD:
      let newArray = [...state.products];
      let newproduct = action.payload;
      console.log("el addddddd",action.payload);

      newproduct.id = action.payload._id;
      newArray.push(newproduct);
      alert("New Product added Successfully!");
      return {
        ...state,
        products: newArray
      };

    //user action handlers

    case actionTypes.AUTH:
      return {
        ...state,
        authorization: action.payload
      };

    case actionTypes.GET_USER_PRODUCTS:
      return {
        ...state,
        addedProducts: action.payload
      };

    case actionTypes.LOGIN:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user-id", action.payload.user._id);
      return {
        ...state,
        logedInUserData: action.payload.user
      };

    case actionTypes.REGISTER:
      return {
        ...state
      };

    case actionTypes.LOG_OUT:
      return {
        ...state,
        logedInUserData: null,
        authorization: null
      };

    //category action handlers
    case actionTypes.GET_CATEGORY_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};
export default reducer;
