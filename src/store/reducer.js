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
  signedUser: {
    token: null,
    user: null
  },
  // signedUser: null,
  addedProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_ALL:
      return {
        ...state,
        products: action.payload
      };

    // case actionTypes.AUTH:
    //   return {
    //     ...state,
    //     authorization: action.payload
    //   };

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
      return {
        ...state,
        selectedProduct: action.payload
      };

    case actionTypes.ADD:
      let newArray = [...state.products];
      newArray.push(action.payload);
      alert("New Product added Successfully!");
      return {
        ...state,
        products: newArray
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
        signedUser: action.payload
      };

    case actionTypes.REGISTER:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default reducer;