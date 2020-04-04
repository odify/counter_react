import React, { Component } from 'react';
import './counter.css';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    handleRestart = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <main>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncrement}> + </button>
                <button onClick={this.handleDecrement}> - </button>
                <button onClick={this.handleRestart}> Restart </button>
                <br></br>
            </main>
        );
    }
}

export default Counter;