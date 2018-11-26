import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.onClick}>
        {this.props.flipped ? this.props.children : <p>Not flipped</p>}
      </div>
    )
  }
}

export default Card;

