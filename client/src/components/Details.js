import React, { useEffect } from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions";


function Details({detail}){
    console.log(detail)
    useEffect(()=>detail, [detail])
if(!detail){
    return <div></div>
}else{


    var {name, image, id, height, weight, hp,attack, defense, speed,type1, type2} = detail

  

    return(
    <div>

        <img src={image} alt=""/>
        <ul>
          <p>{name}</p>
          <p>N° {id}</p>
          <p>Altura {height}</p>
          <p>Peso {weight}</p>
          <p>Vida {hp}</p>
          <p>Ataque {attack}</p>
          <p>Defensa {defense}</p>
          <p>Velocidad {speed}</p>
          <p>Tipos {type1} {type2?type2:null} </p> 
        </ul> 
        </div>
    
        
    );}
};

const mapStateToProps = (state)=>({
    pokemonById: state.pokemonById
  })

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);