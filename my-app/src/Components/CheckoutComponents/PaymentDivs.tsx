import * as React from 'react';
import 'pivotal-ui/css/selection';
import { FlexCol } from 'pivotal-ui/react/flex-grids';

interface Props {
    displayBankCard: () => void
    displaySwish: () => void
    displayKlarna: () => void
}

export default class PaymentDivs extends React.Component<Props, {}> {

      componentDidMount() {
          let paymentDiv = document.getElementsByClassName("paymentDiv")

          for (let i = 0; i < paymentDiv.length; i++) {
              paymentDiv[i].addEventListener("click", this.handleDivSelect)
              
          }
      }


    render() {
        return (
            <div>
                <div className="pui-no-select" style={{display:"flex",flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                  <FlexCol className="bg-accent-teal border-rounded type-white paymentDiv" onClick={this.handleDivSelect} style={this.shippingPaymentBox}>
                    <div className="bg-accent-teal border-rounded type-white" style={this.shippingPaymentBoxInside}>
                    Bank Card
                    </div>
                    <p>Mastercard</p>
                    <p>Visa</p>
                </FlexCol>
                <FlexCol  onClick={() => this.props.displaySwish()} className="paymentDiv" style={this.shippingPaymentBox}>
                <div style={this.shippingPaymentBoxInside}>
                    Swish
                </div>
                </FlexCol>
                <FlexCol  onClick={() => this.props.displayKlarna()} className="paymentDiv" style={this.shippingPaymentBox}>
                <div style={this.shippingPaymentBoxInside}>
                    Klarna
                </div>
                <p>Split up your payment</p>
                </FlexCol>
            </div>
            </div>
        )
    }

    handleDivSelect(event:any) {

        this.props.displayBankCard()


        let paymentDiv = document.getElementsByClassName("paymentDiv") as HTMLCollectionOf<HTMLElement>

        for (let i = 0; i < paymentDiv.length; i++) {
            paymentDiv[i].style.backgroundColor = "lightgray"
        }
        event.currentTarget.style.backgroundColor = "red"
    }


    shippingPaymentBox: React.CSSProperties = {
        width: "150px",
        height: "150px",
        backgroundColor: "lightgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "10px",

        border: "2px solid black",
        borderRadius: "16px",
        fontStyle: "italic",
        fontSize: "16px",
        fontWeight: "bold",
      }
      shippingPaymentBoxInside: React.CSSProperties = {
        width: "100px",
        height: "50px",
        backgroundColor: "red",
        margin: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        border: "2px solid black",
        borderRadius: "16px",
      }
}