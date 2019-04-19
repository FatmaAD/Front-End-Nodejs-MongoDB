import React, { Component } from "react";
import Product from "./../products/product/product";
import {
  getuserProducts,
  remove,
  getById
} from "./../../store/actions/productActions";
import { connect } from "react-redux";
import "./products.css";

class MyProuducts extends Component {

  componentDidMount() {
    const userID = localStorage.getItem("user-id");
    this.props.getAll(userID);
  }
  
  render() {
    console.log("the props in my app",this.props.addedProducts)


    let ps = <h1 className="title"> Nothing To Show Yet </h1>;
    if (this.props.addedProducts.length > 0) {      
      ps = this.props.addedProducts.map(product => (
        <Product
          key={product.id}
          name={product.name}
          img={product.image}
          priceb={product.priceb}
          pricea={product.pricea}
          del={() => this.props.del(product.id)}
          view={() => this.props.showMore(product.id)}
          id={`products/${product.id}`}
        />
      ));
    }
    return (
      <div className="container">
        <div
          className="item-listing__items item-listing--3items"
          style={{ width: "100%" }}
        >
          {ps}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedProducts: state.addedProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAll: id => dispatch(getuserProducts(id)),
    del: id => dispatch(remove(id)),
    showMore: id => dispatch(getById(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyProuducts);
