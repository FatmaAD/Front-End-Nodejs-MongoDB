import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "./../../store/actions/userActions";

class Navigation extends Component {
  render() {
    let login = (
      <NavLink className="nav_link nav__link" to="/login">
        Login
      </NavLink>
    );
    let register = (
      <NavLink className="nav_link nav__link" to="/register">
        Register
      </NavLink>
    );

    let userProducts = null;
    let add = null;
    let usr = null;
    let logOut = null;
    if (this.props.authorization && this.props.user) {
      usr = "Hello" + " " + this.props.user.username;
      logOut = <span onClick={() => this.props.logOut()}>Log Out</span>;
      add = (
        <NavLink to="/add" className="nav__inner-link">
          Add Product
        </NavLink>
      );
      userProducts = (
        <NavLink
          className="nav_link nav__link"
          to={`/products/user/${this.props.authorization.userId}`}
        >
          My Products
        </NavLink>
      );
      login = null;
      register = null;
    }

    return (
      <>
        {/* <!-- header --> */}
        <div className="header">
          {/* <!-- upper header --> */}
          <div className="header__upper">
            {/* <!-- container --> */}
            <div className="container">
              {/* <!-- contact info --> */}
              <ul className="list list--hr list--hr-separator">
                <li className="list__item">
                  <span className="info">
                    {/* <!-- icon --> */}
                    <i className="info__icon far fa-dot-circle" />
                    {/* <!-- info --> */}
                    <span className="info__data">
                      1234 Street Name, City Name
                    </span>
                  </span>
                </li>
                <li className="list__item">
                  <a href="#" className="info">
                    {/* <!-- icon --> */}
                    <i className="info__icon fab fa-whatsapp" />
                    {/* <!-- info --> */}
                    <span className="info__data">123-456-7890</span>
                  </a>
                </li>
                <li className="list__item">
                  <a href="#" className="info">
                    {/* <!-- icon --> */}
                    <i className="info__icon far fa-envelope" />
                    {/* <!-- info --> */}
                    <span className="info__data">mail@domain.com</span>
                  </a>
                </li>
              </ul>
              {/* <!-- side menu --> */}
              <ul className="list list--hr">
                <li className="list__item">
                  <a href="#" className="link">
                    {/* <!-- icon --> */}
                    <i className="link__icon fas fa-angle-right" />
                    {/* <!-- info --> */}
                    About Us
                  </a>
                </li>
                <li className="list__item">
                  <a href="#" className="link">
                    {/* <!-- icon --> */}
                    <i className="link__icon fas fa-angle-right" />
                    {/* <!-- info --> */}
                    Contact Us
                  </a>
                </li>
                {/* <!-- languges --> */}
                <li className="list__item">
                  {/* <!-- drop down --> */}
                  {/* <!-- to oppen dropdown dropdown--opened --> */}
                  <div className="dropdown ">
                    {/* <!-- header --> */}
                    <div className="dropdown__header">
                      <a href="#" className="link">
                        <img className="flag flag-us" src="" alt="" />
                        English
                      </a>
                      <i className="fas fa-angle-down" />
                    </div>

                    {/* <!-- items --> */}
                    <div className="dropdown__body">
                      <ul className="dropdown__items list">
                        <li className="dropdown_item list_item">
                          <a href="#" className="link">
                            <img className="flag flag-us" src="" alt="" />
                            English
                          </a>
                        </li>
                        <li className="dropdown_item list_item">
                          <a href="#" className="link">
                            <img className="flag flag-es" src="" alt="" />
                            Español
                          </a>
                        </li>
                        <li className="dropdown_item list_item">
                          <a href="#" className="link">
                            <img className="flag flag-fr" src="" alt="" />
                            Française
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- middle header --> */}
          <div className="header__middle container">
            {/* <!-- logo --> */}
            <a href="#" className="header__logo-box">
              <img className="header__logo" src="img/logo.png" alt="" />
            </a>
            {/* <!-- user options --> */}
            <div className="header__user-options">
              <strong style={{ paddingRight: "2rem" }}> {usr} </strong>
              {logOut}

              {/* <!-- shopping card dropdown --> */}
              {/* <!-- dropdown--opened to open --> */}
              <div className="dropdown dropdown--left  ">
                {/* <!-- header --> */}
                {/* <div className="dropdown__header">
                <div
                  className="image image--small"
                  style={{ backgroundImage: `url('${iconCart}')` }}
                >
                  <div className="notification notification--danger">1</div>
                </div>
              </div> */}
                {/* <!-- body --> */}
                <div className="dropdown__body">
                  {/* <!-- items --> */}
                  <ul className="dropdown__items list list--vr-separator">
                    <li className="dropdown_item list_item">
                      {/* <!-- item small 2 --> */}
                      <div className="item-small-1">
                        {/* <!-- item data --> */}
                        <div className="item-small-1__data">
                          {/* <!-- title --> */}
                          <a href="" className="item-small-1__title">
                            Camera X1000
                          </a>
                          {/* <!-- price --> */}
                          <span className="item-small-1__description">
                            1 X $890
                          </span>
                        </div>
                        {/* <!-- item image --> */}
                        {/* <div className="item-small-1__image-box">
                        <a
                          href="#"
                          className="item-small-1__image image"
                          style={{ backgroundImage: `url('${productImg}')` }}
                        />
                        <a href="#" className="item-small-1__action">
                          <i className="fas fa-times" />
                        </a>
                      </div> */}
                      </div>
                    </li>
                    <li className="dropdown_item list_item">
                      <div className="item-small-1">
                        {/* <!-- item data --> */}
                        <div className="item-small-1__data">
                          {/* <!-- title --> */}
                          <a href="" className="item-small-1__title">
                            Camera X2000
                          </a>
                          {/* <!-- price --> */}
                          <span className="item-small-1__description">
                            2 X $990
                          </span>
                        </div>
                        {/* <!-- item image --> */}
                        <div className="item-small-1__image-box">
                          <a
                            href="#"
                            className="item-small-1__image image"
                            // style={{ backgroundImage: `url('${productImg}')` }}
                          />
                          <a href="" className="item-small-1__action">
                            <i className="fas fa-times" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* <!-- totals --> */}
                  <div className="separator" />
                  <div className="block">
                    <span className="lable">Total:</span>
                    <span className="lable">$2870</span>
                  </div>
                  {/* <!-- actions --> */}
                  <div className="block list list--hr">
                    <a className="list-item btn btn--gray" href="">
                      View Cart
                    </a>
                    <a className="list-item btn btn--primary" href="">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- lower header --> */}
          <div className="header__lower container">
            {/* <!-- navigation --> */}
            <nav className="nav">
              <ul className="nav__items list list--hr">
                <li className="nav__item dropdown ">
                  {/* <!-- title --> */}
                  <NavLink
                    className="nav_link nav__link dropdown__header"
                    to="/products"
                  >
                    Products
                  </NavLink>
                  {/* <!-- items --> */}
                  <div className="dropdown__body">
                    <ul className=" list">
                      <li className="list__item">
                        <NavLink className="nav__inner-link" to="/products">
                          Product Listing
                        </NavLink>
                      </li>
                      <li className="list__item">{add}</li>
                    </ul>
                  </div>
                </li>
                <li>{userProducts}</li>
                <li />
                <li>{login}</li>
                <li>{register}</li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

const mapstateToProps = state => {
  return {
    authorization: state.authorization,
    user: state.logedInUserData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(Navigation);
