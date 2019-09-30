import React from 'react';

class TodoForm extends React.Component {

    addTodo = event => {
        event.preventDefault();
        if(this.props.formValue){
            this.props.setTodos(this.props.formValue)
            this.props.setFormValue('')
        }
    }

    onChange = event => {
        this.props.setFormValue(event.target.value)
    }

    render (){
        return (
            <form>
                <input value={this.props.formValue} onChange={this.onChange} type='text' placeholder='...todo'/>
                <button onClick={this.addTodo}>Add Todo</button>
                <button onClick={this.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;