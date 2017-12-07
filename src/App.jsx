import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Filter from './components/Filter';
import Form from './components/Form';

const App = props => (
  <main>
    <Header />
    <Filter />
    <List />
    <Form />
  </main>
);

export default App;
