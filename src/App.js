import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';
// import { tsImportEqualsDeclaration } from '@babel/types';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props){
    super(props);
    this.state = {
      todos: [],
      formValue: '',
    }
  }

  setTodos = value => {
    this.setState(currentState => ({
      todos: currentState.todos.concat({name: value, isCompleted: false})
    }))
  }

  markComplete = arr => {
    this.setState(currentState => ({
      todos: arr
    }))
  }

  setFormValue = value => {
    this.setState(currentState => ({
      formValue: value
    }))
  }

  clearCompleted = arr => {
    this.setState(currentState => ({
      todos: arr
    }))
  }

  render() {
    return (
      <div className='main-page'>
        <h2>Todo List</h2>
        <TodoList todos={this.state.todos}
        markComplete={this.markComplete}
        />
        <TodoForm formValue={this.state.formValue}
        todos={this.state.todos}
        setTodos={this.setTodos}
        setFormValue={this.setFormValue}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
