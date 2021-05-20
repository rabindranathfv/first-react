import { Component } from "react";

class Box extends Component {
    render() {
        const boxStyle = {
            border: '1px solid #00a',
            margin: 5,
            padding: 5
        }
        return (
          <div style={boxStyle}>
              {this.props.children}
          </div>  
        );
    }
}

export default class ListBox extends Component {
    render() {
        return (
            <div>
                <h1 style={{ color: 'green' }}> Using Children props!!</h1>
                <Box> Hi a am children </Box>
                <Box> Another Children </Box>
            </div>
        );
    }
}