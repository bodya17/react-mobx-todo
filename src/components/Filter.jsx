import React from 'react';
import { observer, inject } from 'mobx-react';
import { ALL, COMPLETED, UNCOMPLETED } from '../constants/filters';

import FilterLink from './FilterLink';

const Filter = props => (
  <div className="todo-filter">
    <FilterLink
      icon="list"
      active={props.todoStore.activeFilter === ALL}
      onClick={() => props.todoStore.setActiveFilter(ALL)}
    />

    <FilterLink
      icon="check_box"
      active={props.todoStore.activeFilter === COMPLETED}
      onClick={() => props.todoStore.setActiveFilter(COMPLETED)}
    />

    <FilterLink
      icon="check_box_outline_blank"
      active={props.todoStore.activeFilter === UNCOMPLETED}
      onClick={() => props.todoStore.setActiveFilter(UNCOMPLETED)}
    />
  </div>
);

export default inject('todoStore')(observer(Filter));
