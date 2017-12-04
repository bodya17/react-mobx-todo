import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

import FilterLink from "./FilterLink";
@inject('store')
@observer
class Filter extends Component {
  render() {
    return (
      <div className="todo-filter">
        <FilterLink
          icon="list"
          active={this.props.store.activeFilter === "ALL"}
          onClick={() => (this.props.store.activeFilter = "ALL")}
        />

        <FilterLink
          icon="check_box"
          active={this.props.store.activeFilter === "COMPLETED"}
          onClick={() => (this.props.store.activeFilter = "COMPLETED")}
        />

        <FilterLink
          icon="check_box_outline_blank"
          active={this.props.store.activeFilter === "UNCOMPLETED"}
          onClick={() => (this.props.store.activeFilter = "UNCOMPLETED")}
        />
      </div>
    );
  }
}

export default Filter;
