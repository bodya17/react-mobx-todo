import React from 'react';
import NotificationSystem from 'react-notification-system';
import autobind from 'autobindr';
import { inject, observer } from 'mobx-react';

import Header from './components/Header';
import List from './components/List';
import Filter from './components/Filter';
import Form from './components/Form';

@inject(['todoStore'])
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
  }

  _notificationSystem = null;

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }

  render() {
    const { error } = this.props.todoStore;
    if (error) {
      this._notificationSystem.addNotification({
        message: error,
        level: 'error',
        position: 'br'
      });
    }
    return (
      <main>
        <Header />
        <Filter />
        <List />
        <Form />
        <NotificationSystem ref="notificationSystem" />
      </main>
    );
  }
}

export default App;
