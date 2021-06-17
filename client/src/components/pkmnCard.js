import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions";
import { Link } from 'react-router-dom';

function PkmnCard({img, name, type, id}){
    return (<div>
        <img src={img} alt=""/>            
        <Link to={`/pokemons/${id}`}><p>{name}</p></Link>        
        <span>{type[0]} {type[1]}</span>        
    </div>);
};


function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(PkmnCard);