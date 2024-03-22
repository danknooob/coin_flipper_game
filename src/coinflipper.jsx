import React, { Component } from "react";
import './coinflipper.css';

class Coinflipper extends Component {
    render() {
        return (
            <div className="coins">
                <img src={this.props.url} alt={this.props.sides} />
            </div>
        );
    }
}

export default Coinflipper;
