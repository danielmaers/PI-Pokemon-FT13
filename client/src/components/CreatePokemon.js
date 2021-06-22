import React, {useEffect} from "react";
import {connect} from "react-redux";
 import { bindActionCreators } from "redux";
 import * as actionCreators from "../actions/actions"
//buscar useHistory



function CreatePokemon({getTypes, type, createPokemon}){
   
   
    useEffect(()=>{        
        getTypes()
    }, [])
    const [error, setError] = React.useState('');
    const [state, setState]= React.useState(
         { name: " ",
            image: " ",
            height: " ", 
            weight: " ",
             hp: " ",
             attack: " ", 
             defense: " ", 
             speed: " ",
             type1:" ",
            type2:" "
}
         );


        
        function validateName(e){
          if(!/[a-zA-Z]/.test(e.target.value)){
           
            setError('the name must contain only letters AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
          }else{
            setError('');
          }
          setState({
              ...state,
              [e.target.name]: e.target.value
          });
        }
        
        function handleChange(e){
            setState({
              ...state,
              [e.target.name]: e.target.value
            })
          }

        function handleSubmit(e){
          e.preventDefault();
         
            createPokemon(state)
            alert("pokemon creado")
         return 
        }
     

        const { name } = state.name;
        const { image } = state.image;
        const { height } = state.height;
        const { weight } = state.weight;
        const { hp } = state.hp;
        const { attack } = state.attack;
        const { defense } = state.defense;
        const { speed } = state.speed;
        const { type1 } = state.type1;
        const { type2 } = state.type2;
        
          return (
            <div>
             
              <form type="submit">
                <label>Name</label>
                <input className={error && 'danger'} name="name" placeholder="name" value={name} onChange={(e)=>validateName(e)}></input>
                {!error ? null : <span>{error}</span>}
                <label>image</label>
                <textarea name="image" placeholder="image" value={image} onChange={(e)=>handleChange(e)}></textarea>
                <label>height</label>
                <input name="height" placeholder="height" value={height} onChange={(e)=>handleChange(e)}></input>
                <label>weight</label>
                <input name="weight" placeholder="weight" value={weight} onChange={(e)=>handleChange(e)}></input>
                <label>hp</label>
                <input name="hp" placeholder="hp" value={hp} onChange={(e)=>handleChange(e)}></input>
                <label>attack</label>
                <input name="attack" placeholder="attack" value={attack} onChange={(e)=>handleChange(e)}></input>
                <label>defense</label>
                <input name="defense" placeholder="defense" value={defense} onChange={(e)=>handleChange(e)}></input>
                <label>speed</label>
                <input name="speed" placeholder="speed" value={speed} onChange={(e)=>handleChange(e)}></input>
                <label>type1</label>
                 <select name="type1" value={type1} onChange={(e)=>handleChange(e)}>
                 {type&&type.map((type,i)=>(
                     <option key={i} value={type.id}>{type.name}</option>
                 ))}     
                 <option defaultValue="default" selected>{null}</option> 
                </select> 
                
                <label>type2</label>
                 <select name="type2" value={type2} onChange={(e)=>handleChange(e)}>
                 {type&&type.map((type,i)=>(
                     <option key={i} value={type.id}>{type.name}</option>
                 ))}    
                   <option defaultValue="default" selected>{null}</option>
                </select>
                
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Crear Pokemon</button>
              </form>
              
            </div>

          )
        };
  





const mapStateToProps = (state)=>({
    createPokemon: state.createPokemon,
    type: state.type
})

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

// function mapDispatchToProps(dispatch) {
//     return {
//         createPokemon: todo => dispatch(createPokemon(todo)),
//     };
//   }

export default connect(mapStateToProps, mapDispatchToProps)(CreatePokemon);