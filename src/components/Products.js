import React, { Component } from "react";

export class Products extends Component {
    render() {
        return (
            <div className="row">
                <h1 className="text-center">Product List</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Products;
