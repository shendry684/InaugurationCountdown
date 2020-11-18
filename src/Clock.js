import React, {Component} from "react";
import "./App.css";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadLine);
    }
    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;

    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.setState({days, hours, minutes, seconds});
    }

    render() {
        return (
            <div className="wrap">
                <div className="Clock-units days" data-init-value="24">


                    <div className="Clock-months">
                        <table>
                            <thead>
                                <tbody>
                                    <div>
                                        <td>
                                            <th>
                                                <span className="count-unit">Days</span>
                                            </th>
                                            <div className=" figure Clock-days">
                                                <span className="count-num"></span>
                                                <span className="top"></span>
                                                <span className="top-back">
                                                    <span></span>
                                                </span>
                                                <span className="bottom"></span>
                                                <span className="bottom-back">
                                                    <span></span>
                                                </span>
                                                {
                                                this.leading0(this.state.days)
                                            } </div>
                                        </td>
                                        <td>
                                            <th>
                                                <span className="count-unit">Hours</span>
                                            </th>
                                            <div className="figure Clock-hours">
                                                <span className="count-num"></span>
                                                <span classNames="top"></span>
                                                <span class="top-back">
                                                    <span></span>
                                                </span>
                                                <span className="bottom"></span>
                                                <span className="bottom-back">
                                                    <span></span>
                                                </span>
                                                <span className="count-num"></span>
                                                {
                                                this.leading0(this.state.hours)
                                            } </div>
                                        </td>
                                        <td>
                                            <th>
                                                <span className="count-unit">Minutes</span>
                                            </th>
                                            <div className=" figure Clock-minutes">
                                                <span className="count-num"></span>
                                                <span className="top"></span>
                                                <span class="top-back">
                                                    <span></span>
                                                </span>
                                                <span className="bottom"></span>
                                                <span className="bottom-back">
                                                    <span></span>
                                                </span>
                                                {
                                                this.leading0(this.state.days)
                                            } </div>
                                        </td>
                                        <td>
                                            <th>
                                                <span className="count-unit">Seconds</span>
                                            </th>
                                            <div className="figure Clock-seconds">
                                                <span className="count-num"></span>
                                                <span className="top"></span>
                                                <span className="top-back">
                                                    <span></span>
                                                </span>
                                                <span className="bottom"></span>
                                                <span className="bottom-back">
                                                    <span></span>
                                                </span>
                                                <span className="count-num"></span>
                                                {
                                                this.leading0(this.state.seconds)
                                            } </div>
                                        </td>
                                    </div>


                                </tbody>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}
export default Clock;
