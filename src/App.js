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
                                                                                                                                                                                                                                                Inauguration
                                                                                                                                                                                                                                                of 2021</h1>


                </div>
                <div className="App-headline">
                    Number of Days until {
                    this.state.deadline
                } </div>
                <div className="box">
                    <Clock2 deadline={
                        this.state.deadline
                    }/> {/* <Form inline>
                    <FormControl placeholder='new date'
                        onChange={
                            event => this.setState({newDeadLine: event.target.value})
                        }/>
                    <Button onClick={
                        () => this.changeDeadLine()
                    }>Submit</Button>
                </Form> */} </div>
            </div>
        );
    }
}

export default App;
