import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Todo from './Todo';

@inject(['todoStore'])
@observer
class List extends Component {
  render() {
    return (
      <section className="todo-list">
        {this.props.todoStore.filteredTodos.map((todo, i) => (
          <Todo
            key={todo.id}
            todo={todo}
            delete={() => this.props.todoStore.filteredTodos.splice(i, 1)}
          />
        ))}
      </section>
    );
  }
}

export default List;
