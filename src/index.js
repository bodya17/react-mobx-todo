import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import App from "./App";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

import "./app.css";

const store = new TodoListModel();

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

render(
  <div>
    <DevTools />
    <App store={store} />
  </div>,
  document.getElementById("root")
);

// setTimeout(() => {
//   store.addTodo("Get a cookie as well");
// }, 2000);

// playing around in the console
window.store = store;
