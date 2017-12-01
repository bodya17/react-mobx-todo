import React from "react";

import Header from "./components/Header";
import List from "./components/List";
import Filter from "./components/Filter";
import Form from "./components/Form";

const App = props => (
  <main>
    <Header store={props.store} />
    <Filter store={props.store} />
    <List store={props.store} />
    <Form store={props.store} />
  </main>
);

export default App;
