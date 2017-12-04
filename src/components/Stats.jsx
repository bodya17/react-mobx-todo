import React from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";

@inject('store')
@observer
class Stats extends React.Component {
  render() {
    return (
      <table className="stats">
        <tbody>
          <tr>
            <th>All task:</th>
            <td>{this.props.store.todos.length}</td>
          </tr>
          <tr>
            <th>Done:</th>
            <td>{this.props.store.finishedTodoCount}</td>
          </tr>
          <tr>
            <th>Undone:</th>
            <td>{this.props.store.unfinishedTodoCount}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Stats;
