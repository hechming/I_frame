import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Cart extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                购物车
                <Link to='/kind'>瞅瞅分类</Link> 
            </div>
        )
    }
}

export default Cart