import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Todo from './Todo';

const List = props => (
  <section className="todo-list">
    {props.todoStore.filteredTodos.map((todo, i) => (
      <Todo
        key={todo.id}
        todo={todo}
        delete={() => props.todoStore.deleteTodo(todo)}
      />
    ))}
  </section>
);

export default inject('todoStore')(observer(List));
