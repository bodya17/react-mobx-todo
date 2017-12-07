import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';
import { observer, inject } from 'mobx-react';

@inject(['todoStore'])
@observer
class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.state.title;

    if (title) {
      this.props.todoStore.addTodo(title);
      // this.props.onAdd(title);
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

Form.propTypes = {
  // onAdd: PropTypes.func.isRequired
};

export default Form;
