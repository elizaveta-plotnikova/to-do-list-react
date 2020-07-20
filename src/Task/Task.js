import React, {Component} from 'react';
import './Task.css'

class Task extends Component {

    render () {
        return (
            <li className={'task-text'}>{this.props.text}
                <button className={'delete-btn'} onClick={this.props.onDelete}>Delete</button>
            </li>
        )
    }
}

export default Task;