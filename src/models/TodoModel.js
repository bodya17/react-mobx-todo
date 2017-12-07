import { observable, action } from 'mobx';

export default class TodoModel {
  id = Math.random();
  @observable title;
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }

  @action
  changeTitle(title) {
    this.title = title;
  }

  @action
  toggle() {
    this.finished = !this.finished;
  }
}
