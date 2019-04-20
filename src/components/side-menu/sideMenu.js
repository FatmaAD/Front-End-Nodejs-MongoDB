import React from "react";
import { getCategById } from "./../../store/actions/categoryActions";
import { getAll } from "./../../store/actions/productActions";
import { connect } from "react-redux";

const sideMenu = props => {
  return (
    <>
      <section className="filters">
        {/* <!-- search box --> */}
        <div className="search-box">
          <input
            disabled="true"
            className="search-box__input"
            placeholder="Search..."
            type="text"
            name="txt_search"
            id=""
          />
          <button type="submit" className="search-box__btn">
            <i className="fas fa-search" />
          </button>
        </div>
        {/* <!-- filter list --> */}
        <div>
          {/* <!-- filter header --> */}
          <h5>Categories</h5>
          {/* <!-- filter list --> */}
          <ul className="list list--vr-separator">
            <li
              onClick={e => {
                props.getOneCateg(e.target.innerText);
              }}
              className="link list__item"
            >
              <i className="link__icon fas fa-angle-right" />
              Bags
            </li>
            <li
              onClick={e => props.getOneCateg(e.target.innerText)}
              className="link list__item"
            >
              <i className="link__icon fas fa-angle-right" />
              Electronics
            </li>
            <li
              onClick={e => props.getOneCateg(e.target.innerText)}
              className="link list__item"
            >
              <i className="link__icon fas fa-angle-right" />
              Shoes
            </li>
            <li
              onClick={() => props.getAllProducts()}
              className="link list__item"
            >
              <i className="link__icon fas fa-angle-right" />
              All Products
            </li>
          </ul>
        </div>
        {/* <!-- filter tags --> */}
        <div>
          {/* <!-- filter header --> */}
          <h5 />
          {/* <!-- filter tags --> */}
          <div>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        {/* <!-- related items --> */}
        <div>
          {/* <!-- title --> */}
          <h5 />
          {/* <!-- small item --> */}
          <div />
          <div />
          <div />
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(getAll()),
    getOneCateg: categName => dispatch(getCategById(categName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(sideMenu);
