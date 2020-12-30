import React, { Component } from "react";

export class Message extends Component {
    render() {
        return (
            <div className="alert alert-success text-center mt-5" role="alert">
                <h3>{this.props.message}</h3>
            </div>
        );
    }
}

export default Message;
