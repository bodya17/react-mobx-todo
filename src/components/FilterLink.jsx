import React from 'react';
import PropTypes from 'prop-types';

const FilterLink = props => (
  <a className={props.active ? 'is-active' : ''} onClick={props.onClick}>
    <i className="material-icons">{props.icon}</i>
  </a>
);

FilterLink.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FilterLink;
