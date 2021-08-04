import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentWillMount() {
        this.tick();
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            (1000 * (this.props.updateInterval ?? 1))
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        let updated_date = new Date();
        let offset = (this.props.updateInterval ?? 0) * 1000;
        let curtime_ms = updated_date.getTime();
        let newtime_ms = curtime_ms + offset;
        updated_date.setTime(newtime_ms);
        this.setState({
            date: updated_date
        });
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <div>
                    <h2>Time:</h2>
                    <h3>{this.state.date.toLocaleTimeString()}</h3>
                </div>
                <div>
                    <h2>Date:</h2>
                    <h3>{this.state.date.toLocaleDateString()}</h3>
                </div>
            </div>
        );
    }
}

export default Clock
