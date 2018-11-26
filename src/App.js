import React, { Component } from 'react'
import './assets/App.css';
import Card from './Card.js';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'



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
  }

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
    })
  }

  isFlipped = id => this.state[id]

  toggle = id => {
    if (Object.values(this.state).filter(i => i === true).length >= 2) {
      return this.reset()
    }

    this.setState({
      ...this.state,
      [id]: !this.isFlipped(id)
    })
  }

  render() {
    return (
      <div className="App">
        <main className="cardContainer">
          <button onClick={() => this.reset()}>Reset Game</button>
          <button>Score</button>
          <div className="wrap">
            <Card
              flipped={this.isFlipped(1)}
              onClick={() => this.toggle(1)}
              IndexNum={1}
            >
              <img src={img1} alt="img" />
            </Card>
            
            <Card
              flipped={this.isFlipped(2)}
              onClick={() => this.toggle(2)}
              IndexNum={2}
            >
              <img src={img2} alt="img" />
            </Card>
            <Card
              flipped={this.isFlipped(3)}
              onClick={() => this.toggle(3)}
              IndexNum={3}
            >
              <img src={img3} alt="img" />
            </Card>
            <Card
              flipped={this.isFlipped(4)}
              onClick={() => this.toggle(4)}
              IndexNum={4}
            >
              <img src={img4} alt="img" />
            </Card>
            <Card
              flipped={this.isFlipped(5)}
              onClick={() => this.toggle(5)}
              IndexNum={5}
            >
              <img src={img5} alt="img" />
            </Card>
            <Card
              flipped={this.isFlipped(6)}
              onClick={() => this.toggle(6)}
              IndexNum={1}
            >
              <img src={img1} alt="img" />
            </Card>
            <Card
              flipped={this.isFlipped(7)}
              onClick={() => this.toggle(7)}
              IndexNum={2}
            >
              <img src={img2} alt="img" />
            </Card>
            <Card
              flipped={this.isFlipped(8)}
              onClick={() => this.toggle(8)}
              IndexNum={3}
            >
              <img src={img3} alt="img" />
            </Card>
            <Card
              flipped={this.isFlipped(9)}
              onClick={() => this.toggle(9)}
              IndexNum={4}
            >
              <img src={img4} alt="img" />
            </Card>
            <Card
              flipped={this.isFlipped(10)}
              onClick={() => this.toggle(10)}
              IndexNum={5}
            >
              <img src={img5} alt="img" />
            </Card>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
