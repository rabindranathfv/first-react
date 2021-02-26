import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const ImgLogo = () => <img src={logo} className="App-logo" alt="logo" />;;

function Title(props) {
  return <p>HOLA {props.name} in React, Edit <code>src/App.js</code> and save to reload.</p>;
}

const message = 'Learn ReactJs power by Facebook';
class Link extends Component {
  render() {
    return (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        { this.props.msg }
      </a>
    );
  };
}

class App extends Component {
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <ImgLogo />
            <Title name='Rabin' />
            <Link msg={message} />
          </header>
        </div>
      );
  };
}

export default App;
