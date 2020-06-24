import React, {Component} from 'react';
// import Washclothes from './components/Washclothes'
// import Paybills from './components/Paybills'
// import BuyGroceries from './components/Buygroceries'
import Footer from './components/Footer'
import Todolist from './components/todoList'
import './App.css';
import todoData from './components/todoData'

class App extends Component{
    constructor(){
      super()
      this.state={
        todoState: todoData
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
      this.setState(prevState => {
        const updatedTodos = prevState.todoState.map(todos => {
          if(todos.id === id){
            todos.completed = !todos.completed
          }
          return todos
        })
        return{
          todos: updatedTodos
        }
      })
    }

  	render(){
      //console.log(this.state.todoState)
      const todoComponents = this.state.todoState.map(todo => <Todolist key = {todo.id} todo = {todo} handleChange ={this.handleChange} />)
      return (
        <div className="App">
          <header className="App-header">
            <h1>Todo App</h1>
          </header>
          <div className='Tasklist'>
            {todoComponents}
          </div>
          <Footer />
        </div>
      );
    }
}

export default App;
