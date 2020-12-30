import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import Cart from "../components/Cart";
import CartResult from "../components/CartResult";
import { actUpateQuantity } from "../actions/index";
import { changMessage } from "../actions/index";
import { actDeleteCartItem } from "../actions/index";

export class CartContainer extends Component {
    render() {
        return (
            <Cart>
                {this.showCartItem(this.props.cart)}
                {this.getTotalResult(this.props.cart)}
            </Cart>
        );
    }

    showCartItem = (cart) => {
        return cart.map((e, index) => {
            return (
                <CartItem
                    key={index}
                    item={e}
                    onUpdateCart={this.props.onUpdateCart}
                    onChangMessage={this.props.onChangMessage}
                    onDeleteItem={this.props.onDeleteItem}
                />
            );
        });
    };

    getTotalResult = (cart) => {
        let total = cart.reduce((total, current) => {
            return current.product.price * current.quantity + total;
        }, 0);
        return <CartResult total={total} />;
    };
}

const mapSateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateCart: (product, quantity) => {
            dispatch(actUpateQuantity(product, quantity));
        },
        onChangMessage: (message) => {
            dispatch(changMessage(message));
        },
        onDeleteItem: (product) => {
            dispatch(actDeleteCartItem(product));
        },
    };
};

export default connect(mapSateToProps, mapDispatchToProps)(CartContainer);
