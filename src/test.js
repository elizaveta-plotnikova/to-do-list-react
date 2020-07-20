import React, {Component} from 'react';

class Test extends Component {

    state = {
        counter: 0
    }

    counterPlus = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    counterMinus = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <div>Counter: <span>{this.state.counter}</span></div>
                <button onClick={this.counterPlus}> + </button>
                <button onClick={this.counterMinus}> - </button>
            </div>
        )
    }
}

export default Test;