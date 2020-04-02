import * as React from 'react';
import {Component} from 'react';
import {Panel} from 'pivotal-ui/react/panels';
import {Siteframe} from 'pivotal-ui/react/siteframe';
import {Icon} from 'pivotal-ui/react/iconography';
import 'pivotal-ui/css/alignment';
import 'pivotal-ui/css/positioning';

import ShoppingBag from "./CheckoutComponents/ShoppingBag";
import CheckoutInfo from "./CheckoutComponents/CheckoutInfo";
import Shipping from "./CheckoutComponents/Shipping";
import PaymentDivs from "./CheckoutComponents/PaymentDivs";
import BankCardInfo from "./CheckoutComponents/BankCardInfo";
import KlarnaInfo from "./CheckoutComponents/KlarnaInfo";
import SwishInfo from "./CheckoutComponents/SwishInfo";
import { Products } from 'src/ProductItems/ProductItemss';

interface State {
  hideBankCard: boolean
  hideSwish: boolean
  hideKlarna: boolean
  firstName: boolean,
  lastName: boolean,
  email: boolean,
  adress: boolean,
  cart: Products[]
}
export interface theShoppingCart {
  id: string,
  value: number
}

// interface State {
//   counters: Array<Products>
// }

export default class Checkout extends Component <{status?:any; cart?: any}, State> {

  state = {
    hideBankCard: true,
    hideSwish: true,
    hideKlarna: true,
    firstName: true,
    lastName: false,
    email: true,
    adress: false,
    counters: [
        { id: "Potato", value: 1,}
    ],


    firstName: false,
    lastName: false,
    email: false,
    adress: false,
  }

  componentDidMount() {
    if (localStorage.firstName) {
      this.state.firstName = true;
      console.log(this.state.firstName)
    }
  }

  onUpdate = () => {
    console.log("hello")
  };

  render() {
    return (
      <div style={{position: 'relative', height: '100vh'}}>
        <Siteframe {... {
          headerProps:  {
            logo: <div className="ptl pbl pll" style={{fontSize: '40px'}}><Icon src="react" style={{stroke: 'red'}}/></div>,
            companyName: 'Our test store',
            productName: 'Test Store',
          }
        }}>
        <div className="bg-light-gray pal" style={{height: '100%', overflow: "scroll" }}>
          <Panel className="txt-c" {...{title: 'Shopping Bag'}}>
          <ShoppingBag products={this.state.counters}
                    incrementProduct={this.incrementProduct}
                    minusProduct={this.minusProduct}
                    deleteProduct={this.deleteProduct} />
            </Panel>
          <Panel className="txt-c" {...{title: 'Your Information'}}>
            <CheckoutInfo status={this.state} />
          </Panel>
          <Panel className="txt-c" {...{title: 'Shipping'}}>
            <Shipping />
          </Panel >
          <Panel className="txt-c" {...{title: 'Payment'}}>
          <PaymentDivs displayBankCard={this.displayBankCard} displayKlarna={this.displayKlarna} displaySwish={this.displaySwish} /> 
            {!this.state.hideBankCard ?
              <BankCardInfo /> 
            : null}

            {!this.state.hideKlarna ?
              <KlarnaInfo /> 
            : null}

            {!this.state.hideSwish ?
              <SwishInfo /> 
            : null}

          </Panel>
          <Panel className="txt-c" {...{title: 'Confirmation'}}>
            <button onClick={this.checkIfInfoFilledOut}>Send</button>
          </Panel>
          </div>
        </Siteframe>
      </div>
    )
  }


  addToTheCart = (addMeat:string) => {
        
    let productList = this.state.counters
    let number = 0;
    
    productList.forEach((product: Products) => {

        if(product.id === addMeat) {
            product.value++
            console.log("two")
        }
        if(product.id !== addMeat) {
            number++
        }
        if (number === this.state.counters.length) {                
            this.state.counters.push({id: addMeat, value: 1})
            console.log("one")
        }
    })
    this.setState({
        counters: productList
    })
}

incrementProduct = (id: string) => {

    let productList = this.state.counters

    productList.forEach((product: Products) => {
        if(product.id === id) {
            product.value++
        }
    })

    this.setState({
        counters: productList
    })
}

minusProduct = (id:string) => {
  let productList = this.state.counters

  productList.forEach((product: Products) => {
    if(product.id === id) {
      if(product.value <= 1) {
        this.deleteProduct(id)
      }
      else{
        product.value--
        this.setState({
          counters: productList
        })
      }
    }
  })
}

deleteProduct = (id:string) => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({counters});
}

  
  displayBankCard = () => {
    this.setState({hideBankCard: false})
    this.setState({hideSwish: true})
    this.setState({hideKlarna: true})
  }
  displaySwish = () => {
    this.setState({hideBankCard: true})
    this.setState({hideSwish: false})
    this.setState({hideKlarna: true})
  }
  displayKlarna = () => {
    this.setState({hideBankCard: true})
    this.setState({hideSwish: true})
    this.setState({hideKlarna: false})
  }


  checkIfInfoFilledOut = () => {
    if (this.state.hideBankCard === false || this.state.hideKlarna === false || this.state.hideSwish === false) {
      console.log("Payment has been selected")

    }
    else{
      alert("Please select a payment option!")
    }
  }
}