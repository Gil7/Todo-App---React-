import React, { Component } from 'react'

class CreateTodo extends Component{
    constructor(){
        super()
        this.state = {
            title: "",
            description: "",
            responsible: "",
            priority: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.hanldeSubmit = this.hanldeSubmit.bind(this)
    }
    handleInputChange(e){
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    hanldeSubmit(e){
        e.preventDefault();
        
        this.props.onAddTodo(this.state)
        
    }
    render() {
        return (
            <div className="card">
                <form onSubmit={this.hanldeSubmit} className="card-body">
                    <div className="form-group">
                        <label htmlFor="title"><i className="fa fa-file-text"></i></label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsible"><i className="fa fa-user-o"></i></label>
                        <input 
                            required
                            type="text"
                            name="responsible"
                            className="form-control"
                            value={this.state.responsible}
                            onChange={this.handleInputChange}
                            placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"><i className="fa fa-info"></i></label>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="priority"><i className="fa fa-tasks"></i></label>
                        <select
                            name="priority"
                            className="form-control"
                            value={this.state.priority}
                            onChange={this.handleInputChange}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success"> 
                        Guardar
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateTodo;