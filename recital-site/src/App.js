import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      q1: false,
      q2: false,
      q3: false,
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Michael Li's Senior Cello Recital</h1>
        Answer the following questions for more information about my recital! Beware of incorrect answers 😃.
        <div className="content">
          <ol>
            <li>Where is my recital?</li>
            <Button>Ulrich</Button>
            <Button href="https://youtu.be/dQw4w9WgXcQ&autoplay=1" target="_blank">Gildenhorn</Button>
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
