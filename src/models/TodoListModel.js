import { observable, computed, action } from 'mobx';
import { COMPLETED, UNCOMPLETED } from '../constants/filters';
import TodoModel from './TodoModel';

export default class TodoListModel {
  @observable todos = [];
  @observable activeFilter = UNCOMPLETED;

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
    this.todos.push(new TodoModel(title));
  }

  @action
  setActiveFilter(filter) {
    this.activeFilter = filter;
  }

  @action
  deleteTodo(todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
