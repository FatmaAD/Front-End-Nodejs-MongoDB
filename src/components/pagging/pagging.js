import React from "react";
import { connect } from 'react-redux';

const pagging = (props) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.products.length / props.productsInThePage); i++) {
    pageNumbers.push(i)
  }
  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <React.Fragment
        key={number}
      // id={number}
      >
        <li onClick={props.clicked} className="paging__number">{number}</li>
      </React.Fragment>
    )
  })
  return (
    <>
      {renderPageNumbers}
    </>
  )
}

const mapStateToProps = state => {
  return {
    products: state.products,
    productsInThePage: state.productsInThePage
  }
}
export default connect(mapStateToProps, null)(pagging);
