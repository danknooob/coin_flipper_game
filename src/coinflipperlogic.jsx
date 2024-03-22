import React, { Component } from "react";
import Coinflipper from "./coinflipper";

class Coinflipperlogic extends Component {
    static defaultProps = {
        coins: [
            {
                sides: 'heads',
                url: "https://tinyurl.com/react-coin-heads-jpg"
            },
            {
                sides: 'tails',
                url: "https://tinyurl.com/react-coin-tails.jpg"
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            currentCoin: null,
            valueCountHeads: 0,
            valueCountTails: 0,
            value: 0,
        };
        this.flipping = this.flipping.bind(this);
        this.isClicked = this.isClicked.bind(this);
    }

    flipping() {
        const randIndex = Math.floor(Math.random() * this.props.coins.length);
        const coin = this.props.coins[randIndex];
        this.setState((prevState) => ({
            currentCoin: coin,
            value: prevState.value + 1,
            valueCountHeads: coin.sides === 'heads' ? prevState.valueCountHeads + 1 : prevState.valueCountHeads,
            valueCountTails: coin.sides === 'tails' ? prevState.valueCountTails + 1 : prevState.valueCountTails,
        }));
    }

    isClicked() {
        this.flipping();
    }

    render() {
        return (
            <>
                <h1>Lets flip the coin!!</h1>
                <button onClick={this.isClicked}>Click Me!</button>
                {this.state.currentCoin && <Coinflipper url={this.state.currentCoin.url}/>}
                <p>Out of {this.state.value} flips, The number of Tails: {this.state.valueCountTails}, The number of Heads: {this.state.valueCountHeads}</p>
            </>
        );
    }
}

export default Coinflipperlogic;
