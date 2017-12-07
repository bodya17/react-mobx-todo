import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

import FilterLink from "./FilterLink";

@inject(["todoStore"])
@observer
class Filter extends Component {
  render() {
    return (
      <div className="todo-filter">
        <FilterLink
          icon="list"
          active={this.props.todoStore.activeFilter === "ALL"}
          onClick={() => (this.props.todoStore.activeFilter = "ALL")}
        />

        <FilterLink
          icon="check_box"
          active={this.props.todoStore.activeFilter === "COMPLETED"}
          onClick={() => (this.props.todoStore.activeFilter = "COMPLETED")}
        />

        <FilterLink
          icon="check_box_outline_blank"
          active={this.props.todoStore.activeFilter === "UNCOMPLETED"}
          onClick={() => (this.props.todoStore.activeFilter = "UNCOMPLETED")}
        />
      </div>
    );
  }
}

export default Filter;
