import React from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions";


function PkmnCard({props}){
    return (<div>
        <div className= "pkmnImg">
            <img src={props[0].img} alt=""/>
        </div>
        <div className="card" >
        <div>hp: {props[0].hp}</div>
        <div>attack: {props[0].attack}</div>
        <div>defense: {props[0].defense} </div>
        <div>speed: {props[0].speed}</div>
        <div>height: {props[0].height}</div>
        <div>weight: {props[0].weight} </div>
        </div>
    </div>);
};

const mapStateToProps = (state)=>({
    props: state.showPokemons
})

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PkmnCard);