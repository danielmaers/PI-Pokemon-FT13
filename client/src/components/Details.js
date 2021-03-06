import React, { useEffect } from "react";
import "./Details.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions";

function Details({ detail }) {
  console.log(detail);
  useEffect(() => detail, [detail]);
  if (!detail) {
    return <div></div>;
  } else {
    var {
      name,
      image,
      id,
      height,
      weight,
      hp,
      attack,
      defense,
      speed,
      type1,
      type2,
    } = detail;
    if (detail.types !== undefined) {
      type1 = detail.types[0]?.name;
      type2 = detail.types[1]?.name;
    }

    return (
      <div className="details">
        <img src={image} alt="" />
        <ul>
          <p>{name}</p>
          <p>N° {id}</p>
          <p>Height {height}</p>
          <p>Weight {weight}</p>
          <p>Health {hp}</p>
          <p>Attack {attack}</p>
          <p>Defense {defense}</p>
          <p>Speed {speed}</p>
          <p>
            Types {type1 ? type1 : null} {type2 ? type2 : null}{" "}
          </p>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemonById: state.pokemonById,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
