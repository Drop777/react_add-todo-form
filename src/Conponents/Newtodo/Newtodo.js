/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Newtodo.css';
import PropTypes from 'prop-types';

class Newtodo extends React.Component {
  state = {
    currentUserName: '',
    newTodoTitle: '',
    errorTitle: false,
    errorUser: false,
  };

  handleChangeSelect = ({ target }) => {
    const { value } = target;

    this.setState({
      currentUserName: value,
      errorUser: false,
    });
  };

  handleChangeInput = ({ target }) => {
    const { value } = target;

    this.setState({
      newTodoTitle: value,
      errorTitle: false,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { users, todos, addTodo } = this.props;
    const { currentUserName, newTodoTitle } = this.state;

    if (!currentUserName && newTodoTitle.length === 0) {
      this.setState({
        errorUser: true,
        errorTitle: true,
      });
    } else if (!currentUserName) {
      this.setState({
        errorUser: true,
      });
    } else if (newTodoTitle.length === 0) {
      this.setState({
        errorTitle: true,
      });
    } else {
      const userId = users.findIndex(user => user.name === currentUserName);
      const newTodo = {
        title: newTodoTitle,
        user: {
          name: currentUserName,
          id: userId + 1,
        },
        completed: false,
        id: todos.length + 1,
      };

      this.setState({
        currentUserName: '',
        newTodoTitle: '',
        errorTitle: false,
        errorUser: false,
      });

      addTodo(newTodo);
    }
  };

  render() {
    const { users } = this.props;
    const {
      currentUserName,
      newTodoTitle,
      errorTitle,
      errorUser,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleClick} className="form">
          <label htmlFor="select">Add new task</label>
          <input
            type="text"
            placeholder="Add your todo"
            onChange={this.handleChangeInput}
            value={newTodoTitle}
            maxLength={30}
            className="form__input"
            id="select"
          />
          {errorTitle && <small className="form__error">Enter ToDo</small>}
          <select
            onChange={this.handleChangeSelect}
            value={currentUserName}
            className="form__select"
          >
            <option>
                Choose a user
            </option>
            {users.map(user => (
              <option value={user.name} key={user.id}>{user.name}</option>
            ))}
          </select>
          {errorUser && <small className="form__error">Choose User</small>}
          <button type="submit" className="form__button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Newtodo.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  todos: PropTypes.arrayOf(PropTypes.object),
  addTodo: PropTypes.func,
}.isrequaired;

export default Newtodo;
