import React, {Component} from 'react'


class Navigation extends Component{
  constructor(){
    super()
    this.state = {
      title : "Mis tareas: "
    }
  }
  render (){
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="#" className="text-white"> {this.state.title} 
          <span className="badge badge-pill ml-2 badge-light"> {this.props.count} </span>
        </a>
      </nav>
    )
  }
}
export default Navigation
