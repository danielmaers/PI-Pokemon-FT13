import React from "react";
import "./pkmnCard.css";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions";
import { Link } from 'react-router-dom';

function PkmnCard({img, name, type1, type2, id}){
    return (<div className="card">
        <img src={img} alt="" className="pkmnImage" />            
        <Link to={`/home/pokemons/${id}`}><p>{name}</p></Link>        
        <span>{type1} {type2?type2:null}</span>        
    </div>);
};


function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(null, mapDispatchToProps)(PkmnCard);