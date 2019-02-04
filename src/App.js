import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css' 
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import NotFound from './components/NotFound'
import Cart from './components/Cart'
import ProductDetails from './components/product/ProductDetails'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={ProductDetails}/>
          <Route path="/cart" component={Cart}/>
          <Route component={NotFound}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
