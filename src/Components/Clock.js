import React, { Component } from 'react';
import '../App.css';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
    
      componentWillMount() {
        const date = { date: new Date() };
        this.setState(date);
      }
    
      componentDidMount() {
        setInterval(() => {
          this.setState({ date: new Date() });
        }, 1000);
      }
      
    render() {
        return (
            <div>
                <div>
                   <h1 class="clock">{this.state.date.toTimeString().split(" ")[0]}</h1>
                </div>
            </div>
        )
    }
}
