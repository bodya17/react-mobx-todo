import { observable, computed, action } from 'mobx';
import { COMPLETED, UNCOMPLETED } from '../constants/filters';
import TodoModel from './TodoModel';

export default class TodoListModel {
  @observable todos = [];
  @observable activeFilter = UNCOMPLETED;
  @observable error = null;

  @computed
  get filteredTodos() {
    switch (this.activeFilter) {
      case COMPLETED:
        return this.todos.filter(todo => todo.finished);
      case UNCOMPLETED:
        return this.todos.filter(todo => !todo.finished);
      default:
        return this.todos;
    }
  }

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @computed
  get finishedTodoCount() {
    return this.todos.length - this.unfinishedTodoCount;
  }

  @action
  addTodo(title) {
    const todo = new TodoModel(title);
    fetch('http://localhost:3000/todo', {
      mode: 'cors',
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ todo })
    })
      .then(res => res.json())
      .then(
        action(res => {
          if (res.status === 'ok') {
            this.todos.push(todo);
          } else {
            this.error = res.error;
          }
        })
      );
  }

  @action
  fetchTodos() {
    fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(
        action(todos => {
          todos.forEach(todo => {
            this.todos.push(new TodoModel(todo.title, todo.id, todo.finished));
          });
        })
      );
  }

  @action
  setActiveFilter(filter) {
    this.activeFilter = filter;
  }

  @action
  deleteTodo(todo) {
    const index = this.todos.indexOf(todo);
    fetch('http://localhost:3000/todo', {
      mode: 'cors',
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: todo.id })
    })
      .then(res => res.json())
      .then(
        action(res => {
          if (res.status === 'ok') {
            this.todos.splice(index, 1);
          } else {
            this.error = res.error;
          }
        })
      );
  }
}
