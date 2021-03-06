import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../Context'

export default class Product extends Component {
  render() {
    //props variable names are linked to storeProducts in data.js
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div className="img-container p-5" onClick= {() => console.log("product clicked")}>            
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button className="cart-btn" 
              disabled={inCart} 
              onClick={() => console.log("Added to Cart")}
            >
            {inCart ? 
                (<p className="text-capitalize mb-0" disabled>{" "}in Cart</p>) :
                (<i className="fas fa-cart-plus"/>)}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-center mb-0">
              {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">${price}</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

const ProductWrapper = styled.div `
  .card {
    border-color:transparent;
    transition:all 1s linear;
  }
  .card-footer {
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
  }
`