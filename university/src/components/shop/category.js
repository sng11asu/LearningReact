import React, {Component} from 'react'
import Subcategory from './subcategory'

var category = ''
class Category extends Component{
    constructor() {
        super()
        this.state = {
            subcategories: [],
        }
        this.catClick = this.catClick.bind(this)
    }
    getData(event){
        fetch("http://127.0.0.1:8000/products/subcategories/?category="+category)
        .then(response => response.json())
            .then(data => {
                this.setState({
                subcategories: data
            })
        })
    }

    catClick(event) {
        category = event.target.textContent
        this.getData(event)
    }

    render () {
        const subCat = this.state.subcategories.map(sub => <Subcategory key={sub.id} subCategory={sub} />)
        return(
            <li>
                <a href="#" onClick={this.catClick}>{ this.props.cat.category }</a>
                <ul>{ subCat } </ul>
            </li>
        )
    }
}

export default Category;