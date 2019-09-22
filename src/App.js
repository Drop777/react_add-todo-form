import React from 'react';
import './App.css';
import Newtodo from './Conponents/Newtodo/Newtodo';
import Todolist from './Conponents/Todolist/Todolist';

import users from './api/users';
import todos from './api/todos';

function todosWithUsers(todosLIst, usersList) {
  return todosLIst.map(todo => ({
    ...todo,
    user: usersList.find(item => item.id === todo.userId),
  }));
}

class App extends React.Component {
  state = {
    todosList: todosWithUsers(todos, users),
  };

  addTodo = (todo) => {
    this.setState(prevState => ({
      todosList: [...prevState.todosList, todo],
    }));
  };

  render() {
    const { todosList } = this.state;

    return (
      <div className="App">
        <h1>Static list of todos</h1>

        <p>
          <span>Todos: </span>
          {todosList.length}
        </p>
        <Newtodo users={users} todos={todosList} addTodo={this.addTodo} />
        <div className="container">
          {todosList.map(todo => <Todolist key={todo.id} todo={todo} />)}
        </div>
      </div>
    );
  }
}

export default App;
