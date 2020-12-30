import React, { Component } from "react";

export class Cart extends Component {
    render() {
        return (
            <div className="row">
                <h1 className="text-center mt-5">Cart List</h1>
                <div className="col-1"></div>
                <div className="col-10 align-middle">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>{this.props.children}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Cart;
