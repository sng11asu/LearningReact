import React, {Component} from 'react'
//import App, {handleChange} from "./../App"

class todoList extends Component{
    //console.log(props)

  

    render(){
        const todoStyles = {
            fontStyle: "italic",
            color: "orange",
            textDecoration: "line-through"
        }
        return(
        <div className = 'washclothes'>
            <label style={this.props.todo.completed ? todoStyles: null}>{this.props.todo.title}</label>
            <input type = "checkbox" onChange = {(event)=> this.props.handleChange(this.props.todo.id)} checked={this.props.todo.completed}></input>
            <p className='description'>{this.props.todo.userId}</p>
        </div>
        )
    }
}

export default todoList