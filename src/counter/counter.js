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
  
    }
  
    render() {
      const reset = () => {
        this.setState({ counter: 0 });
      }
      const increment = () => {
        this.setState({ counter: this.state.counter + 1  });
      }
      const decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
      }
      return (
        <div>
          <ShowCounter counter={this.state.counter} />
          <button type="button" onClick={reset}>Reset Me!</button>
          <button type="button" onClick={increment}>Increment!</button>
          <button type="button" onClick={decrement}>Decrement!</button>
        </div> 
      )
    }
  }