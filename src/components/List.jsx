import React, { Component } from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";
import store from "../";

import { observer, inject } from "mobx-react";

@observer(["store"])
class List extends Component {
  render() {
    return (
      <section className="todo-list">
        {this.props.store.filteredTodos.map((todo, i) => (
          <Todo
            key={todo.id}
            todo={todo}
            delete={() => this.props.store.filteredTodos.splice(i, 1)}
          />
        ))}
      </section>
    );
  }
}

export default List;
