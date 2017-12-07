import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import autobind from 'autobindr';

@observer
class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
    autobind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editing) {
      this.refs.title.focus();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.refs.title.value;
    this.props.todo.changeTitle(title);
    this.setState({ editing: false });
  }

  handleDelete() {
    this.props.delete();
  }

  handleToggle() {
    this.props.todo.toggle();
  }

  handleEdit() {
    this.setState({ editing: true });
  }

  renderDisplay() {
    const className = `todo${this.props.finished ? ' completed' : ''}`;

    return (
      <div className={className}>
        <Checkbox
          checked={this.props.todo.finished}
          onChange={this.handleToggle}
        />

        <span className="todo-title">{this.props.todo.title}</span>

        <Button className="edit icon" icon="edit" onClick={this.handleEdit} />
        <Button
          className="delete icon"
          icon="delete"
          onClick={this.handleDelete}
        />
      </div>
    );
  }

  renderForm() {
    return (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="title" defaultValue={this.props.todo.title} />
        <Button className="save icon" icon="save" type="submit" />
      </form>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

export default Todo;
