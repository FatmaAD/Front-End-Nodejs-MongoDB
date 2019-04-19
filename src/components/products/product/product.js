import React from "react";
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

const product = (props) => {
    let trash = null ;
    if (props.authorization && props.user) {
        trash = <a onClick={props.del} href="#"><i className="fas fa-trash-alt"></i></a>
    }
    return (
       <>
            <div className="item-medium-1">
                <div className="item-medium-1__image image" style={{ backgroundImage: `url('${props.img}')` }}>
                    <a href="#" className="item-medium-1__action">Add to Cart</a>
                </div>
                <a href="#">
                    <h4>{props.name}</h4>
                    <div>
                        <del>{props.priceb}</del>
                        <span className="lable">{props.pricea}</span>
                    </div>
                </a>
                <div className="crud-actions">
                    <NavLink to={props.id} onClick={props.view}><i className="far fa-eye"></i></NavLink>
                    {trash}
                </div>
            </div>
        </>
    )
}
const mapstateToProps = state => {
    return {
        authorization: state.authorization,
        user: state.logedInUserData

    };
  };

export default connect(mapstateToProps)(product);