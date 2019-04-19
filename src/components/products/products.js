import React from "react";
import { connect } from "react-redux";
import Product from "./product/product";
import SideMenu from "../side-menu/sideMenu";
import { remove, getById } from "../../store/actions/productActions";

const Products = props => {
  const p = props.products.map(product => (
    <Product
      key={product.id}
      name={product.name}
      img={product.image}
      priceb={product.priceb}
      pricea={product.pricea}
      addedBy={product.addedBy}
      del={() => props.del(product.id)}
      view={() => props.showMore(product.id)}
      id={`products/${product.id}`}
    />
  ));

  return (
    <>
      <div className="container">
        <SideMenu />
        <section className="item-listing">
          <div className="item-listing__tools">
            <select className="form-control" name="" id="">
              <option value="1">Featured</option>
              <option value="2">Price low to high</option>
              <option value="3">Price high to low</option>
              <option value="4">Name</option>
            </select>
            <a className="action-btn" href="#">
              <i className="fas fa-plus" />
            </a>
          </div>

          <div
            className="item-listing__items item-listing--3items"
            style={{ width: "100%" }}
          >
            {p}
          </div>

          {/* pagging */}
          <div className="paging">
            {/* <!-- left arrow --> */}
            <div className="paging__arrow">
              <i className="fas fa-angle-left" />
            </div>
            {/* <!-- page number --> */}

            {/* <!-- right arrow --> */}
            <div className="paging__arrow">
              <i className="fas fa-angle-right" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const mapDispatchToProps = dispatch => {
  return {
    del: id => dispatch(remove(id)),
    showMore: id => dispatch(getById(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
