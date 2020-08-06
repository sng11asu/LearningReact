import React, {Component} from 'react'
import Product from './products'

var subCategory = ''
class Subcategory extends Component{
    constructor() {
        super()
        this.state = {
            products: [],
        }
        this.subcatClick = this.subcatClick.bind(this)
    }
    getData(event){
        fetch("http://127.0.0.1:8000/products/products/?subcat="+subCategory)
        .then(response => response.json())
            .then(data => {
                this.setState({
                products: data
            })
        })
    }

    subcatClick(event) {
        console.log("Clicked")
        subCategory = event.target.textContent
        this.getData(event)
        console.log(subCategory)
        console.log(this.state.subcategories)
    }    
    render () {
        const product = this.state.products.map(prod => <Product key={prod.id} prod={prod} />)
        return(
            <li>
                
                <a href="#" onClick={this.subcatClick}>{ this.props.subCategory.sub_category }</a>
                
                <ul>{ product } </ul>
                
            </li>
        )
    }
}

export default Subcategory;