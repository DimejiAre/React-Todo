import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { tsImportEqualsDeclaration } from '@babel/types';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(props){
    super(props);
    this.state = {
      todos: [{name: 'a'},{name: 'b'},{name: 'c'}],
      formValue: '',
    }
  }

  setTodos = value => {
    this.setState(currentState => ({
      todos: currentState.todos.concat({name: value})
    }))
  }

  setFormValue = value => {
    this.setState(currentState => ({
      formValue: value
    }))
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm formValue={this.state.formValue}
        todos={this.state.todos}
        setTodos={this.setTodos}
        setFormValue={this.setFormValue}
        />
      </div>
    );
  }
}

export default App;
