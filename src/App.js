import React, { Component } from "react";
import "./App.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

class Card extends Component {
  render() {
    return (
      <div className="card" onClick={this.props.onClick}>
        {this.props.flipped ? this.props.children : <p>Not flipped</p>}
      </div>
    );
  }
}

class App extends Component {
  state = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false
  };

  reset = () => {
    this.setState({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false
    });
  };

  isFlipped = id => this.state[id];
  

  toggle = id => {
      if(Object.values(this.state).filter(i => i === true).length >= 2) {
          return this.reset()
      }
    this.setState({        
        ...this.state,
        [id]: !this.isFlipped(id)
      });  
  }

  render() {
    return (
      <div className="App">
        <main className="cardContainer">
          <button onClick={() => this.reset()}>Reset Game</button>
          <button>Score</button>
          <div className="wrap">
            <Card flipped={this.isFlipped(1)} onClick={() => this.toggle(1)}>
              <img src={img1} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(2)} onClick={() => this.toggle(2)}>
              <img src={img2} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(3)} onClick={() => this.toggle(3)}>
              <img src={img3} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(4)} onClick={() => this.toggle(4)}>
              <img src={img4} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(5)} onClick={() => this.toggle(5)}>
              <img src={img5} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(6)} onClick={() => this.toggle(6)}>
              <img src={img1} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(7)} onClick={() => this.toggle(7)}>
              <img src={img2} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(8)} onClick={() => this.toggle(8)}>
              <img src={img3} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(9)} onClick={() => this.toggle(9)}>
              <img src={img4} alt="img" />
            </Card>
            <Card flipped={this.isFlipped(10)} onClick={() => this.toggle(10)}>
              <img src={img5} alt="img" />
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
