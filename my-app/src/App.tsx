import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'pivotal-ui/css/flex-grids';
import 'pivotal-ui/css/colors';
import 'pivotal-ui/css/images';
import 'pivotal-ui/css/panels';
import 'pivotal-ui/css/whitespace';
import 'pivotal-ui/css/border';
import 'pivotal-ui/css/typography';
import 'pivotal-ui/css/vertical-alignment';
import 'pivotal-ui/css/positioning';
import './styles/main.css'
import Firebase, { FirebaseContext } from './Firebase';
import HomePage from './HomePage';
import { mockedProducts } from './MockedData';
import ProdPage from './prodPage';

function App () {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <Switch>
        {/* <Route path="/product1">
            {/* <ProdPage id={1} product={mockedProducts} /> 
          </Route> */}
          {mockedProducts.map(product => {
            const component = `product${product.id}`
            return (
              <Route key={product.id} path={`/product${product.id}`}>
              <ProdPage id={product.id} product={product} />
              </Route>
            )
          })}
          <Route path="/product">
            <HomePage />
          </Route> */}
          
          <Route path="/checkout">
            {/* <CheckoutPage /> */}
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </FirebaseContext.Provider>

  );
}

export default App;
