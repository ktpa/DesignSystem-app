import { FirebaseContext } from '../Firebase';
import React from 'react';
import { PrimaryButton } from 'pivotal-ui/react/buttons'
import { CartContext } from './CartContext';
import 'pivotal-ui/css/iconography';
import 'pivotal-ui/css/alerts';
import 'pivotal-ui/css/iconography'
import { withRouter } from 'react-router-dom';

interface ConfirmOrderButtonProps {
    checkIfDone: any;
}

interface ConfirmOrderButtonState {
    isLoading: boolean;
}

class ConfirmOrderButton extends React.Component<ConfirmOrderButtonProps, ConfirmOrderButtonState> {
    constructor(props: ConfirmOrderButtonProps) {
        super(props);
        this.state = {
            isLoading: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (<FirebaseContext.Consumer>
            {firebase =>
                <CartContext.Consumer>
                    {cartContext =>
                        <>
                            {this.state.isLoading === true ?
                                <div className="icon icon-middle spinner position-absolute" style={{ fontSize: "96px", margin: "0 auto" }}><svg className="icon-spinner-lg" height="100px" width="100px" viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
                                    <circle className="ring" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                                    <circle className="path" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                                </svg></div> : null}
                            <p className="type-sm">Confirm Payment</p>
                            <PrimaryButton large disabled={this.state.isLoading || cartContext.cart.length <= 0} className="auth" id="anon"
                                onClick={cartContext.cart.length <= 0 ? null :
                                    () => this.props.checkIfDone() === true ? this.handleClick(firebase, cartContext) : () => null
                                }>
                                Confirm order
                            </PrimaryButton>
                        </>
                    }</CartContext.Consumer>
            }</FirebaseContext.Consumer>);
    }

    handleClick = (firebase: any, cartContext: any) => {
        this.setState({ isLoading: true });
        firebase.doSignInAnonymously();

        setTimeout(() => {
            cartContext.cart = [];
            this.setState({ isLoading: false });
        }, 2000);
        return null;
    }
    
    return (<FirebaseContext.Consumer>
        {firebase =>
            <CartContext.Consumer>
                {cartContext =>
                    <>
                        {isLoading === true ?
                            <div className="icon icon-middle spinner position-absolute" style={{ fontSize: "96px", margin: "0 auto" }}><svg className="icon-spinner-lg" height="100px" width="100px" viewBox="0 0 101 101" xmlns="http://www.w3.org/2000/svg">
                                <circle className="ring" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                                <circle className="path" cx="50%" cy="50%" fill="none" r="45%" strokeLinecap="butt" strokeWidth="10%"></circle>
                            </svg></div> : null}
                        <p className="type-sm">Confirm Payment</p>

                        <PrimaryButton className="auth" id="anon"
                            onClick={() => {
                                props.checkIfDone() === true && handleClick(firebase, cartContext);
                            }}>
                            Confirm order
                        </PrimaryButton>
                    </>
                }</CartContext.Consumer>
        }</FirebaseContext.Consumer>)
}

export default ConfirmOrderButton;
