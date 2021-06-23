import React, { useEffect, useState } from "react";
import "./pokemons.css";
import { connect, useDispatch } from "react-redux";
//import PkmnCard from "./pkmnCard"
import Pagination from "./Pagination";
import Mapping from "./Mapping";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions";

function Pokemons({
  getPokemons,
  showPokemons,
  clearPokemons,
  getTypes,
  types,
  sortPokemons,
  pokemonFilter,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pkmnPerPage] = useState(12);
  const [order, setOrder] = useState("");
  const [typeOrder, setTypeOrder] = useState("");
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons();
    getTypes();
    return () => {
      dispatch(clearPokemons());
    };
  }, []);

  //GET CURRENT POKMN
  const indexOfLastPkmn = currentPage * pkmnPerPage;
  const indexOfFirstPkmn = indexOfLastPkmn - pkmnPerPage;
  const currentPkmns = showPokemons.slice(indexOfFirstPkmn, indexOfLastPkmn);

  //CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function handleOrderA(e) {
    setOrder(e.target.value);
  }

  function handleOrderB(e) {
    setTypeOrder(e.target.value);
  }

  function submitOrder(e) {
    e.preventDefault();
    sortPokemons(showPokemons, order, typeOrder);
    setOrder("");
    setTypeOrder("");
    setCurrentPage(1);
  }

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  function submitFilter(e) {
    e.preventDefault();

    pokemonFilter(showPokemons, filter);

    setCurrentPage(1);
  }

  return (
    <div className="pokegrid">
      <form type="submit">
        <label>Order By</label>
        <select name="order" value={order} onChange={(e) => handleOrderA(e)}>
          <option defaultValue="undefined" selected>
            {null}
          </option>
          <option value="alphabetic">Alphabetic</option>
          <option value="attack">Attack</option>
        </select>
        <select
          name="typeorder"
          value={typeOrder}
          onChange={(e) => handleOrderB(e)}
        >
          <option defaultValue="undefined" selected>
            {null}
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
        <button type="submit" onClick={(e) => submitOrder(e)}>
          Order
        </button>
      </form>

      <form type="submit">
        <label>Filter By</label>
        <select name="filter" value={filter} onChange={(e) => handleFilter(e)}>
          <option defaultValue="default" selected>
            {null}
          </option>
          <option value="database" selected>
            From database
          </option>
          <option value="api" selected>
            From Api
          </option>

          {types &&
            types.map((types, i) => (
              <option key={i} value={types.name}>
                {types.name}
              </option>
            ))}
        </select>

        <button type="submit" onClick={(e) => submitFilter(e)}>
          Filter
        </button>
      </form>
      <ul>
        <Mapping pokemons={currentPkmns} />

        <Pagination
          pkmnPerPage={pkmnPerPage}
          totalPkmn={showPokemons.length}
          paginate={paginate}
        />
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  showPokemons: state.showPokemons,
  types: state.types,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);
