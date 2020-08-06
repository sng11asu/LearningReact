import React, {Component} from 'react'
import University from './university'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Adduniversity from './addUniversity'

var searchText = ""
class Universities extends Component{
    constructor(){
        super()
        this.state = {
            results : []
        }
        this.getResults = this.getResults.bind(this)
    }

    Search(event){
        fetch("http://127.0.0.1:8000/Search/searchUniversity/?search="+searchText)
        .then(response => response.json())
            .then(data => {
                this.setState({
                    results: data
                })
            })
    }

    getResults(event){
        searchText = document.getElementById("searchtext").value
        this.Search(event)
    }

    render () {
        const universities = this.state.results.map(univ => <University key={univ.id} university={univ} />)
        return(
            <div>
                <h1>Universities</h1>
                <input id="searchtext" type="text" placeholder="Search University"></input>
                <button onClick={this.getResults}>Search</button>
                <br/>
                <BrowserRouter>
                    <Link to={`/addUniversity`}>
                        <button>Add University</button>
                    </Link>
                    <Switch>
                        <Route path="/addUniversity" component={Adduniversity} />
                    </Switch>
                </BrowserRouter>
                <ul>{ universities } </ul>
            </div>
        )
    }
}

export default Universities;