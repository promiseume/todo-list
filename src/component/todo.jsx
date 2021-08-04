import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div className='taskList' >
                <p>
                    {this.props.task}
                <span>
                    <input type='checkbox'></input>
                    <button onClick={() => this.props.onDelete(this.props.taskId)}>delete</button>
                    </span>
                    </p>
            </div>
        )
    }
}
