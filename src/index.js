import React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';

import App from './App';
import TodoListModel from './models/TodoListModel';

import './app.css';

mobx.useStrict(true); // don't allow state modifications outside actions

const store = new TodoListModel();

// store.addTodo('Get Coffee');
// store.addTodo('Write simpler code');
// store.todos[0].finished = true;

store.fetchTodos();

render(
  <Provider todoStore={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

// setTimeout(() => {
//   store.addTodo('Get a cookie as well ');
// }, 2000);

window.store = store;
