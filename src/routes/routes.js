import React from "react";
import {Switch, Route } from "react-router-dom";
import Products from "../components/products/products";
import ProductDetails from "../components/product-details/productDetails";
import AddForm from "../components/add-product/addForm";

const routes = (
  <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={ProductDetails} />
      <Route exact path="/add" component={AddForm} />
  </Switch>
);
export default routes;
