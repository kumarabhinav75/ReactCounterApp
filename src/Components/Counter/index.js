import React, { Component } from 'react';
import './index.css'
import Button from '../Button';

class Counter extends Component {

  state = {
    count: this.props.initialValue
  }

  incrementCount = () => this.setState({count: this.state.count+1});
  decrementCount = () => this.setState({count: this.state.count-1});

  render(){
    return (
      <div>
      <p>Counter : {this.state.count}</p>
      <Button className="button1" buttonText="Increase" onClick={this.incrementCount} />
      <Button className="button2" buttonText="Decrease" onClick={this.decrementCount} />
      </div>
    );
    }
}
export default Counter;