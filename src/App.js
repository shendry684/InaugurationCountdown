import React, {Component} from 'react';

import Clock from './Clock';

import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'January 20, 2021',
            newDeadline: ''
        }
    }
    changeDeadLine() {
        this.setState({deadline: this.state.newDeadLine});

    }

    render() {
        return (
            <div className="App">
                <div className="jumbotron">

                    <h1>Countdown to the
                        <strong>Inauguration</strong>
                        of 2021</h1>


                </div>
                <div className="App-title">
                    Number of Days until {
                    this.state.deadline
                } </div>

                <Clock deadline={
                    this.state.deadline
                }/>

            </div>
        );
    }
}

export default App;
