import React, {Component} from 'react'
import Programs from './programs'
import {Button } from 'react-bootstrap'

class Launch extends Component{
    constructor(){
        super()
        this.state = {
            launchdetails : [],
            years : [],
            yearSelected: '',
            launch : '',
            landing : ''
        }
        this.filterClick = this.filterClick.bind(this)
        this.filteredResults = this.filteredResults.bind(this)
    }

    componentDidMount(){
        fetch("https://api.spacexdata.com/v3/launches?limit=100")
        .then(response => response.json())
        .then(data => {
            this.setState({
                launchdetails : data
            })
        })

        for(var i=2006; i<=2020; i++){
            this.state.years.push(i)
        }
    }

    filterClick(event){
        if(event.target.parentElement.className === "years"){
            this.setState({
                yearSelected : event.target.textContent,
                launch : '',
                landing : ''
                }, this.filteredResults)
        }else if(event.target.parentElement.className === "launch"){
            this.setState({launch : event.target.textContent}, this.filteredResults)
        }else if(event.target.parentElement.className === "landing"){
            this.setState({landing : event.target.textContent}, this.filteredResults)
        }
    }

    filteredResults(event){
        fetch("https://api.spacexdata.com/v3/launches?limit=100&launch_success="+this.state.launch+"&land_success="+this.state.landing+"&launch_year="+this.state.yearSelected)
        .then(response => response.json())
        .then(data => {
            this.setState({
                launchdetails : data
            })
        })
    }

    render () {
        //console.log(this.state)
        const yearButton = this.state.years.map(year => <Button onClick={this.filterClick} key={year}>{year}</Button>)
        //debugger
        //console.log(yearButton)
        const launchProgram = this.state.launchdetails.map(program => <Programs key={program.flight_number} program={program} />)
        return(
            <div>
                <div id="filter">
                    <span>
                    <h6>Launch Year</h6>
                    <div class="years">
                        {yearButton}
                    </div>
                    </span>
                    <span class="launch">
                        <h6>Successful Launch</h6>
                        <Button onClick={this.filterClick}>True</Button>
                        <Button onClick={this.filterClick}>False</Button>
                    </span>
                    <span class="landing">
                        <h6>Successful Landing</h6>
                        <Button onClick={this.filterClick}>True</Button>
                        <Button onClick={this.filterClick}>False</Button>
                    </span>

                </div>
                <div id="cards" class="row">{ launchProgram }</div>
            </div>
        )
    }
}

export default Launch;