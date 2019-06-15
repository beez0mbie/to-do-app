import React from 'react';
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoState: todosData
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    this.setState( prevState => {
        const updatedTodos = prevState.todoState.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed
            }
            return todo;
        })
        return {
          todoState: updatedTodos
        }
    })
  }

  render(){
    const todoComponent = this.state.todoState.map(
      item => <TodoItem 
      key = {item.id}
      item = {item}
      handleClick = {this.handleClick}
      />
    )

    return (
      <div className='todo-list'>
        {todoComponent}
      </div>
    );
  }
}

export default App;
