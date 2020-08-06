import React, {Component} from 'react'
import Category from './category'

class Shop extends Component{
  constructor(){
    super()
    this.state = {
      categories: [], 
    }  
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/products/categories/")
      .then(response => response.json())
        .then(data => {
          this.setState({
            categories: data
          })
        })
  }

  render(){
    const category = this.state.categories.map(cat => <Category key={cat.id} cat={cat} />)
    return(
        <div>
            <h1>Shop</h1>
            <ul>{ category }</ul>
        </div>
    )
  }
}

export default Shop;
