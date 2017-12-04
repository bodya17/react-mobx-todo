import React from "react";
import PropTypes from "prop-types";

import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

function Header(props) {
  return (
    <header>
      <Stats />
      <h1>Mobx Todo</h1>
    </header>
  );
}

export default Header;
