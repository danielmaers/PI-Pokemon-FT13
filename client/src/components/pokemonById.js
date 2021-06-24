import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions";
import Details from "./Details.js";

function GetPokemonById({ getPokemonByID, pokemonById, props }) {
  useEffect(() => {
    getPokemonByID(props);
  }, []);

  return (
    <div>
      <Details detail={pokemonById} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemonById: state.pokemonById,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GetPokemonById);
