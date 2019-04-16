import React from "react";


import { connect } from "react-redux";

const productDetails = props => {
  return (
    <>
      <div className="product-details container">
        <section className="product-details__main">
          <div className="slider">
            <div className="slider__items">
              <div
                className="slider__item active"
                style={{ backgroundImage: `url('${props.selected.image}')` }}
              />

            </div>
            <div className="slider__indicators">
              <span className="slider__indicator active" />
            </div>
          </div>
          <div className="product-details__info">
            <h1>{props.selected.name}</h1>
            <div className="rating">
              <div className="rating__stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
              </div>
              <div className="rating__data">2 reviews</div>
            </div>
            <div className="product-details__amount">
              {props.selected.pricea}
            </div>
            <p className="product-details__desc">
              {props.selected.description}
            </p>
            <div className="product-details__add">
              <div className="increment-control">
                <a href="#" className="increment-control__action">
                  -
                </a>
                <input
                  type="text"
                  className="form-control"
                  title="Qty"
                  defaultValue="1"
                />
                <a href="#" className="increment-control__action">
                  +
                </a>
              </div>

            </div>
            <div className="product-details__meta">
              Categories: {props.selected.category} .
            </div>
          </div>
        </section>
        <section className="tabs">
          <div className="tabs__headers">
            <div className="tabs__header active">Description</div>
            <div className="tabs__header">Additional Information</div>
            <div className="tabs__header">Reviews (2)</div>
          </div>
          <div className="tabs__bodies">
            <div className="tabs__body active">
              <div className="product-details__desc">
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Fusce sagittis, massa fringilla
                  consequat blandit, mauris ligula porta nisi, non tristique
                  enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus.
                </p>
                <p>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Fusce sagittis, massa fringilla
                  consequat blandit, mauris ligula porta nisi, non tristique
                  enim sapien vel nisl. Suspendisse vestibulum lobortis dapibus.
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae;
                </p>
              </div>
            </div>
            <div className="tabs__body ">tab2</div>
            <div className="tabs__body">tab3</div>
          </div>
        </section>

        <div className="separator" />
        <section className="realated-product">
          <h3>Related Products</h3>
          <div className="item-listing__items item-listing--4items">
            <div className="item-medium-1">
              <div
                className="item-medium-1__image image"
                style={{ backgroundImage: `url('${props.selected.image}')` }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye" />
                </a>
                <a href="#">
                  <i className="fas fa-edit" />
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt" />
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div
                className="item-medium-1__image image"
                style={{ backgroundImage: `url('${props.selected.image}')` }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye" />
                </a>
                <a href="#">
                  <i className="fas fa-edit" />
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt" />
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{ backgroundImage: `url('${props.selected.image}')` }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye" />
                </a>
                <a href="#">
                  <i className="fas fa-edit" />
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt" />
                </a>
              </div>
            </div>
            <div className="item-medium-1">
              <div className="item-medium-1__alert">Sale</div>
              <div
                className="item-medium-1__image image"
                style={{ backgroundImage: `url('${props.selected.image}')` }}
              >
                <a href="#" className="item-medium-1__action">
                  Add to Cart
                </a>
              </div>
              <a href="#">
                <h4>Photo Camera</h4>
                <div>
                  <del>$325</del>
                  <span className="lable">$299</span>
                </div>
              </a>
              <div className="crud-actions">
                <a href="#">
                  <i className="far fa-eye" />
                </a>
                <a href="#">
                  <i className="fas fa-edit" />
                </a>
                <a href="#">
                  <i className="fas fa-trash-alt" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    selected: state.selectedProduct
  };
};
export default connect(mapStateToProps)(productDetails);
