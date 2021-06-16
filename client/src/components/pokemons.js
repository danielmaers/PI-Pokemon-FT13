import React from "react";
//import store from "../store/store";
import {connect} from "react-redux";
//import axios from "axios";
//import {PkmnCard} from "./pkmnCard"
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions"


function Pokemons({getPokemons}){
    console.log(getPokemons())
    return (
        <div>

        {/* {
        getPokemons()
        // .map(pokemon=><PkmnCard props={pokemon}/>)                 
        } */}
    </div>
    );
}

const mapStateToProps = (state)=>({
    props: state.showPokemons
})

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);