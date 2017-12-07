import React from 'react';
import { observer, inject } from 'mobx-react';

@inject(['todoStore'])
@observer
class Stats extends React.Component {
  render() {
    return (
      <table className="stats">
        <tbody>
          <tr>
            <th>All task:</th>
            <td>{this.props.todoStore.todos.length}</td>
          </tr>
          <tr>
            <th>Done:</th>
            <td>{this.props.todoStore.finishedTodoCount}</td>
          </tr>
          <tr>
            <th>Undone:</th>
            <td>{this.props.todoStore.unfinishedTodoCount}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Stats;
