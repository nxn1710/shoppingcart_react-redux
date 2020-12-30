import React, { Component } from "react";
import * as Message from "../constants/Message";
export class CartItem extends Component {
    onUpdateCart = (product, quantity) => {
        this.props.onUpdateCart(product, quantity);
        this.props.onChangMessage(Message.UPDATE_MSG);
    };

    onDeleteItem = (product) => {
        this.props.onChangMessage(Message.DELETE_MSG);
        this.props.onDeleteItem(product);
    };
    render() {
        let { item } = this.props;
        return (
            <tr>
                <td>
                    <img
                        src={item.product.image}
                        style={{ width: 50 }}
                        alt="AAAAAA"
                    />
                </td>
                <td>{item.product.name}</td>
                <td>
                    <button
                        onClick={() => this.onUpdateCart(item.product, -1)}
                        className="btn btn-sm btn-primary"
                    >
                        -
                    </button>
                    <button
                        onClick={() => this.onUpdateCart(item.product, +1)}
                        className="btn btn-sm btn-primary"
                    >
                        +
                    </button>{" "}
                    {item.quantity}
                </td>
                <td>${item.product.price}</td>
                <td>${item.product.price * item.quantity}</td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.onDeleteItem(item.product)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;
