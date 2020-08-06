import React, {Component} from 'react'

class Product extends Component{
    render () {
        return(
            <li>
                <p href="">{ this.props.prod.product }</p>
            </li>
        )
    }
}

export default Product;