/* eslint-disable react/prop-types */
import React from 'react';
import './Todolist.css';
import PropTypes from 'prop-types';

const Todolist = ({ todo }) => (

  <div className="container__item">
    <h2>
      ToDo:
      {todo.id}
    </h2>
    <p>{todo.user.name}</p>
    <p>
      Title:
      {todo.title}
    </p>
    <p>
      UserId:
      {todo.user.id}
    </p>
    <span>
      Completed:
      {todo.completed
        ? ' \u2714'
        : ' \u2716'}
    </span>
  </div>
);

Todolist.propsTypes = {
  todo: PropTypes.object,
}.isRequaired;

export default Todolist;
