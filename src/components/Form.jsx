import React from 'react';
import { observer, inject } from 'mobx-react';
import autobind from 'autobindr';

import Button from './Button';

@inject(['todoStore'])
@observer
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
    autobind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { title } = this.state;

    if (title) {
      this.props.todoStore.addTodo(title);
      this.setState({ title: '' });
    }
  }

  handleChange(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  render() {
    const disabled = !this.state.title;

    return (
      <form className="todo-add-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="What needs to be done?"
          onChange={this.handleChange}
        />

        <Button type="submit" disabled={disabled}>
          Add
        </Button>
      </form>
    );
  }
}

export default Form;
