import React from "react";
import PropTypes from "prop-types";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

function Header(props) {
  return (
    <header>
      <Stats store={props.store} />
      <h1>Redux Todo</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Header;
