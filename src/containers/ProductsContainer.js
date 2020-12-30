import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import Products from "../components/Products";
import { actAddToCart } from "../actions/index";
import { changMessage } from "../actions/index";
export class ProductsContainer extends Component {
    render() {
        return <Products> {this.showProduct(this.props.products)}</Products>;
    }

    showProduct(products) {
        return products.map((product, index) => {
            return (
                <Product
                    product={product}
                    key={index}
                    onAddToCart={this.props.onAddToCart}
                    onChangMessage={this.props.onChangMessage}
                />
            );
        });
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangMessage: (message) => {
            dispatch(changMessage(message));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
