import React from 'react';
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todoState: todosData
    }
  }

  render(){
    const todoComponent = this.state.todoState.map(
      item => <TodoItem 
      key = {item.id}
      item = {item}
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
