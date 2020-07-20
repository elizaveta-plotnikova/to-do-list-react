import React, {Component} from 'react';
import './List.css';
import Task from '../Task/Task.js'

class List extends Component {

  state = {
    tasks: [],
    inputText: '',
    inputError: false
  }

inputRef = (domInput) => {
  this.domInput = domInput;
}

handleInput = (event) => {
  this.setState({
    inputText: event.target.value
  })
}

addTask = () => {
  const { tasks, inputText } = this.state;

  if (inputText.length < 4) {
    this.setState({
      inputError: true
    })
    return (
      <ul className={'input-err'} errorHandler={this.errorHandler}>
        <li>Слишком короткое задание</li>
      </ul>
    )
  } else {
    this.setState({
      tasks: [...tasks, {text: inputText}],
      inputText: '',
      inputError: false
    }); 
  }
  
  this.domInput.focus();
}

deleteHandler = (i) => {
  const array = this.state.tasks.concat();
  array.splice(i, 1); 
  this.setState({
    tasks: array
  })
}

  render() {

    return (
      <div className='wrapper'>

        <h1>Create your task-list</h1>

          <div>

            <div className={'conteiner'}>
              <input 
                ref={this.inputRef}
                className='input' 
                type='text' 
                placeholder='New task'
                value={this.state.inputText} 
                onChange={this.handleInput}>
              </input>
              <button className='btn' onClick={this.addTask}>Create task</button>
            </div>

            { this.state.inputError
                ? <ul className={'input-err'}>
                    <li>Слишком короткое задание</li>
                  </ul>
                :  null
            }

            <ul className={'tasks'}>
              {this.state.tasks.map((el, i) => {
                return (
                  <Task 
                    key={i} 
                    text={el.text}
                    onDelete={this.deleteHandler.bind(this, i)}
                  />)
              })}
            </ul>

          </div>
      </div>
    )
  } 
}
  
export default List;