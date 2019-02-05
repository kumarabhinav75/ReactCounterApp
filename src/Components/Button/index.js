import React, { Component } from 'react';

class Button extends Component {
  render(){
    console.log(this.props);
    return (
      <button onClick = {this.props.onClick} className = {this.props.className}>{this.props.buttonText}</button>
    );
    }
}
export default Button;