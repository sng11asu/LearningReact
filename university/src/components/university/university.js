import React, {Component} from 'react'

class University extends Component{
    render () {
        console.log(this.props.university.name)
        return(
            <li>
                <div>
                    <h3><a href={this.props.university.web_page}>{ this.props.university.name }</a></h3>
                    <h6>Country: {this.props.university.country} </h6>
                </div>
            </li>
        )
    }
}

export default University;