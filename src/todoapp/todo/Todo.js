import React, { Component } from 'react'
import './index.css'

class Todo extends Component {
    render() {
        return (
            <div>
                <div className="todo">
                    <p style={{textDecoration: this.props.todo.completed ? 'line-through' : ''}}> {this.props.todo.title} </p>

                    <div className="status">
                        <button className="complete" type="button" onClick={() => this.props.completeTodo(this.props.todo.id)}> Completed </button>
                        <button className="delete" type="button" onClick={() => this.props.deleteTodo(this.props.todo.id)}> Delete </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo
