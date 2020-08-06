import React, {Component} from 'react'
import axios from 'axios'

class Adduniversity extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            country: '',
            alpha_two_code: '',
            domain: '',
            web_page: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        let nam = event.target.name
        let val = event.target.value
        this.setState({[nam]: val})
    }

    handleSubmit(event){
        //event.preventDefault()
        console.log(this.state)
        axios.post("http://127.0.0.1:8000/Search/createUniversity/", this.state)
        .then(response => {
            console.log(response)
        })
    }

    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2>Add University</h2>
                <label>University Name:<input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></label><br/>
                <label>Country:<input type="text" name="country" value={this.state.country} onChange={this.handleChange} /></label><br/>
                <label>Country Code:<input type="text" name="alpha_two_code" value={this.state.alpha_two_code} onChange={this.handleChange} /></label><br/>
                <label>Domain:<input type="text" name="domain" value={this.state.domain} onChange={this.handleChange} /></label><br/>
                <label>Web page:<input type="text" name="web_page" value={this.state.web_page} onChange={this.handleChange} /></label><br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Adduniversity;