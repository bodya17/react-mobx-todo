import { observable, action } from 'mobx';

function put(body) {
  return fetch('http://localhost:3000/todo', {
    mode: 'cors',
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  }).then(res => res.json());
}

export default class TodoModel {
  @observable title;
  @observable finished;

  constructor(title, id = Math.random(), finished = false) {
    this.title = title;
    this.id = id;
    this.finished = finished;
  }

  @action
  changeTitle(title) {
    put({ id: this.id, title }).then(
      action(res => {
        if (res.status === 'ok') {
          this.title = title;
        } else {
          this.error = res.error;
        }
      })
    );
  }

  @action
  toggle() {
    put({ id: this.id, finished: !this.finished }).then(
      action(res => {
        if (res.status === 'ok') {
          this.finished = !this.finished;
        } else {
          this.error = res.error;
        }
      })
    );
  }
}
