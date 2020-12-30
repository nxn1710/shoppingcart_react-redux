import React, { Component } from "react";
import * as Message from '../constants/Message'
export class Product extends Component {
    onAddToCart = (product) => {
        this.props.onAddToCart(product);
        this.props.onChangMessage(Message.ADD_TO_CART_MSG)
    };
    render() {
        let { product } = this.props;
        return (
            <div className="col-3">
                <div className="card">
                    <img
                        src={product.image}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <h5 className="card-title text-right">
                            {product.name}
                        </h5>
                        <p className="card-text">${product.price}</p>
                        <button
                            onClick={() => this.onAddToCart(product)}
                            className="btn btn-primary"
                        >
                            Buy Product
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
