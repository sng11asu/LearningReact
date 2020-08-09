import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Launch from './components/launch'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="spacex">
        <header>
          <h2>SpaceX Launch Programs</h2>   
        </header>
        <Launch />
        <h4>Developed by: Ashutosh Singh</h4>
      </div>
    )
  }
}

export default App;
