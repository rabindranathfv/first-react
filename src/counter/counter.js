import { Component } from 'react';

class ShowCounter extends Component {
    render() {
      return (
        <p><spam> {this.props.counter }</spam></p>
      )
    }
  }
  
export default class Counter extends Component {
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
      this.reset = this.reset.bind(this);
    }

    reset() {
      this.setState({ counter: 0 });
    }
    increment = () => {
      this.setState({ counter: this.state.counter + 1  });
    }
    decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    }
    render() {
      return (
        <div>
          <ShowCounter counter={this.state.counter} />
          <button type="button" onClick={this.reset}>Reset Me!</button>
          <button type="button" onClick={this.increment}>Increment!</button>
          <button type="button" onClick={this.decrement}>Decrement!</button>
        </div> 
      )
    }
  }