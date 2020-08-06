import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Shop from './components/shop/shop'
import Universities from './components/university/universities'
import './App.css';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <h1>
            <Link to={`/shop`}>Shop</Link>/
            <Link to={`/universities`}>Universities</Link>
          </h1>
          <Switch>
            <Route path='/shop' component={Shop} />
            <Route path='/universities' component={Universities} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
