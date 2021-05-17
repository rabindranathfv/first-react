import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const ImgLogo = () => <img src={logo} className="App-logo" alt="logo" />;

function Title(props) {
  return <p>Hello {props.name} in React, Edit <code>src/App.js</code> and save to reload.</p>;
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

const user = { name: "Rabindranath", lastname: "Ferreira"};
const UseFlag = (props) => <span>{props.flag ? 'Flag activated' : 'flag deactivated' } </span>
const PersonLastname = (props) => props.lastname;

class DataTypes extends Component {
  render() {
    return (
      <div>
        <ul> 
            <li>string:{ this.props.text }</li> 
            <li>number: {this.props.numberInfo}</li> 
            <li>Boolean with component and ternary operator: <UseFlag flag={this.props.flag}/></li> 
            <li>Array: { this.props.info }</li> 
            <li>Name of User: { this.props.personInfo.name }, Remenber React doesn't support full object as props</li> 
            <li> acceso into a property in a Object <PersonLastname lastname={this.props.personInfo.lastname} /></li>
            <li>function as props: { this.props.multiply} </li>
        </ul>

        <div>
          Component as Props {this.props.componentAsProp}
        </div>
      </div>
    )
  }
}

const ClickMe = () => {
  return (
      <button type="button">Click Me!</button>
  )
}

const multiply = (n) => n*2; 

class DefaultPropsExample extends Component {
  render() {
    return (
      <div>
        <p>Empty Props: {this.props.info}</p>
      </div>
    )
  }
}

// using default Props
DefaultPropsExample.defaultProps = {
  info: 'Using default Props'
}

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 1
    };
    setInterval( () => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 2000)

  }

  render() {
    const reset = () => {
      this.setState({ counter: 0 })
    }
    return (
      <div>
        <p>Contador { this.state.counter }</p>
        <button type="button" onClick={reset}>Reset Me!</button>
      </div> 
    )
  }
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
          <DataTypes text='props as String' 
              numberInfo={14} 
              flag={false}
              info={[1,22,44,"hola", true, -1, false]}
              personInfo={user}
              multiply={multiply(20)}
              componentAsProp={<ClickMe />}
             />

        <DefaultPropsExample />
        <Counter />
        </div>
      );
  };
}

export default App;
