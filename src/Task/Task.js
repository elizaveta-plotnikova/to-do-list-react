import React, {Component} from 'react';
import './Task.css'

class Task extends Component {

    render () {
        return (
            <li className={'task'}>
                <div className={'task-text'}>{this.props.text}</div>
                <button className={'task-delete-btn'} onClick={this.props.onDelete}>Delete</button>
            </li>
        )
    }
}

export default Task;