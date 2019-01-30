import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Default from './components/Default'
import Cart from './components/Cart'
import Details from './components/Details'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <ProductList></ProductList>
        <Cart></Cart>
        <Details></Details>
        <Default></Default>
      </React.Fragment>
    );
  }
}

export default App;
