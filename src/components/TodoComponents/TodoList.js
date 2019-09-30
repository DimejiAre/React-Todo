import React from 'react';

export default class TodoList extends React.Component {
    render (){
        return (
            <div>{this.props.todos.map(item => (
                <p>{item.name}</p>
            ))}</div>
        )
    }
}
