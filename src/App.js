import React, { Component } from "react";
import Navigation from "./components/navigation/navigation";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from "./components/products/products";
import ProductDetails from "./components/product-details/productDetails";
import AddForm from "./components/add-product/addForm";
import Register from "./components/registerForm/register";
import Login from "./components/login/login";
import MyProducts from "./components/my-products/products";
import { connect } from "react-redux";
import { getAll } from "./store/actions/productActions";
import { authenticate } from "./store/actions/userActions";
import "./App.scss";

class App extends Component {
  componentDidMount() {
    this.props.getps();
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("user-id");
      this.props.getUserId(userId, token);
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route
                exact
                path="/products/user/:userid"
                component={MyProducts}
              />
              <Route exact path="/products/:id" component={ProductDetails} />
              <Route exact path="/add" component={AddForm} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getps: () => dispatch(getAll()),
    getUserId: (userId, token) => dispatch(authenticate(userId, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
