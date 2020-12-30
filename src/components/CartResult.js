import React, { Component } from "react";

export class CartResult extends Component {
    render() {
        return (
            <tr>
                <td colSpan={3}>
                    <h4>Total Price: ${this.props.total}</h4>
                </td>
            </tr>
        );
    }
}

export default CartResult;
