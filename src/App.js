import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function Title(props) {
  return <p>HOLA {props.name} in React, Edit <code>src/App.js</code> and save to reload.</p>;
}
class App extends Component {
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Title name='Rabin' />
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
  };
}

export default App;
