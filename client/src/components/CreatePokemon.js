import React, { useEffect } from "react";
import "./CreatePokemon.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions";
//buscar useHistory

function CreatePokemon({ getTypes, types, createPokemon }) {
  useEffect(() => {
    getTypes();
  }, []);
  const [error, setError] = React.useState("");
  const [state, setState] = React.useState({
    name: " ",
    image: " ",
    height: " ",
    weight: " ",
    hp: " ",
    attack: " ",
    defense: " ",
    speed: " ",
    type1: " ",
    type2: " ",
  });

  function validateString(e) {
    if (!/[a-zA-Z]/.test(e.target.value)) {
      setError("must contain only letters");
    } else {
      setError("");

      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function validateNumber(e) {
    if (!/[0-9]/.test(e.target.value)) {
      setError("must contain only numbers");
    } else {
      setError("");

      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (state.name !== " ") {
      createPokemon(state);
      alert("pokemon creado");
    } else {
      alert("No se pudo crear. Revisar los datos ingresados");
    }
    return;
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
  console.log(state);
  return (
    <div className="container">
      <form type="submit" className="createForm">
        <label>Name</label>
        <input
          className={error && "danger"}
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => validateString(e)}
        ></input>
        {!error ? null : <span className="error">{error}</span>}
        <label>image</label>
        <input
          name="image"
          placeholder="image"
          value={image}
          onChange={(e) => validateString(e)}
        ></input>
        {!error ? null : <span className="error">{error}</span>}
        <label>height</label>
        <input
          name="height"
          placeholder="height"
          value={height}
          onChange={(e) => validateNumber(e)}
        ></input>
        {!error ? null : <span className="error">{error}</span>}
        <label>weight</label>
        <input
          name="weight"
          placeholder="weight"
          value={weight}
          onChange={(e) => validateNumber(e)}
        ></input>
        {!error ? null : <span className="error">{error}</span>}
        <label>hp</label>
        <input
          name="hp"
          placeholder="hp"
          value={hp}
          onChange={(e) => validateNumber(e)}
        ></input>
        {!error ? null : <span className="error">{error}</span>}
        <label>attack</label>
        <input
          name="attack"
          placeholder="attack"
          value={attack}
          onChange={(e) => validateNumber(e)}
        ></input>
        {!error ? null : <span className="error">{error}</span>}
        <label>defense</label>
        <input
          name="defense"
          placeholder="defense"
          value={defense}
          onChange={(e) => validateNumber(e)}
        ></input>
        {!error ? null : <span className="error">{error}</span>}
        <label>speed</label>
        <input
          name="speed"
          placeholder="speed"
          value={speed}
          onChange={(e) => validateNumber(e)}
        ></input>
        {!error ? null : <span className="error">{error}</span>}
        <label>type1</label>
        <select name="type1" value={type1} onChange={(e) => handleChange(e)}>
          {console.log()}
          {types &&
            types.map((type, i) => (
              <option key={i} value={type.id}>
                {type.name}
              </option>
            ))}
          <option defaultValue="default" selected>
            {null}
          </option>
        </select>

        <label>type2</label>
        <select name="type2" value={type2} onChange={(e) => handleChange(e)}>
          {types &&
            types.map((type, i) => (
              <option key={i} value={type.id}>
                {type.name}
              </option>
            ))}
          <option defaultValue={null} selected>
            {null}
          </option>
        </select>

        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Crear Pokemon
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  createPokemon: state.createPokemon,
  types: state.types,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// function mapDispatchToProps(dispatch) {
//     return {
//         createPokemon: todo => dispatch(createPokemon(todo)),
//     };
//   }

export default connect(mapStateToProps, mapDispatchToProps)(CreatePokemon);
