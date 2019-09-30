import React from 'react';
import './Todo.css';

export default class TodoList extends React.Component {

    markComplete = event => {
        const item = event.target.innerText;
        const newArr = this.props.todos.map(element => {
            if(element.name === item){
                if(element.isCompleted === true){
                    return {name: element.name, isCompleted: false}
                }
                return {name: element.name, isCompleted: true}
            }
            return element
        })
        this.props.markComplete(newArr)
    }
    render (){
        return (
            <div>{this.props.todos.map(item => (
                <div>
                    <p className={'complete ' + (item.isCompleted? 'show' : 'hidden')}
                    key={item.name}
                    onClick={this.markComplete}
                    >{item.name}</p>
                </div>
            ))}</div>
        )
    }
}
