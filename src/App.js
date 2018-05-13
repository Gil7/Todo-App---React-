import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import {todos} from './data.json'
import  CreateTodo  from './components/CreateTodo'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this)
    
  }  
  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  handleDeleteTodo(index){
    this.setState({
      todos: this.state.todos.filter((todo, i) => {
        return i !== index
      })
    })
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div key={i} className="col-md-4">
          <div  className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p>{todo.responsible}</p>
            </div>
            <div className="card-footer">
              <button
                onClick={this.handleDeleteTodo.bind(this, i)}
                className="btn btn-danger"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <Navigation count={this.state.todos.length}/>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <img src={logo} className="App-logo" alt="logo" />
              <CreateTodo onAddTodo={this.handleAddTodo}></CreateTodo>
              
            </div>
            <div className="col-md-8 row scrolling">
              {todos}
            </div>
            
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
