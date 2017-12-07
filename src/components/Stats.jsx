import React from 'react';
import { observer, inject } from 'mobx-react';

const Stats = props => (
  <table className="stats">
    <tbody>
      <tr>
        <th>All task:</th>
        <td>{props.todoStore.todos.length}</td>
      </tr>
      <tr>
        <th>Done:</th>
        <td>{props.todoStore.finishedTodoCount}</td>
      </tr>
      <tr>
        <th>Undone:</th>
        <td>{props.todoStore.unfinishedTodoCount}</td>
      </tr>
    </tbody>
  </table>
);

export default inject('todoStore')(observer(Stats));
