import React, {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/actions"
import Details from "./Details";



function SearchPokemon({getPokemonByName, pokemonByName, clearPokemonByName}){
   const dispatch = useDispatch()
    useEffect(()=>{
        return ()=>{
            dispatch(clearPokemonByName())
        }    
    }, []);
const [state, setState]= React.useState("")

function handleChange(e){

setState(e.target.value)

}

function handleSubmit(e){
    
e.preventDefault();
console.log(state)
getPokemonByName(state);
setState('');

}

return (
    
    <div>
        {


        }
         <form onSubmit={(e) =>handleSubmit(e)}>
           
            <input type="text" value={state} onChange={(e) =>handleChange(e)}/>
            <button type="submit">Search Pokemon</button>            
        </form>
        <div>
          <Details detail={pokemonByName}/>
        </div>
        
    </div>
);

};



const mapStateToProps = (state)=>({
    pokemonByName: state.pokemonByName
})

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPokemon);

