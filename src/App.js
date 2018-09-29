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
    2: false
  };

  reset = () => {
    this.setState({
      1: false,
      2: false
    });
  };

  isFlipped = id => this.state[id];

  toggle = id =>
    this.setState({
      ...this.state,
      [id]: !this.isFlipped(id)
    });

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
            <Card>
              <img src={img3} alt="img" />
            </Card>
            <Card>
              <img src={img4} alt="img" />
            </Card>
            <Card>
              <img src={img5} alt="img" />
            </Card>
            <Card>
              <img src={img1} alt="img" />
            </Card>
            <Card>
              <img src={img2} alt="img" />
            </Card>
            <Card>
              <img src={img3} alt="img" />
            </Card>
            <Card>
              <img src={img4} alt="img" />
            </Card>
            <Card>
              <img src={img5} alt="img" />
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
