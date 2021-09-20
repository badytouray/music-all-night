import React, { Component} from "react";
import "./CountDownTimer.css"



class CounDownTimer extends Component {

    state = {
        days: 0,
        hours: '00',
        minutes: '00',
        seconds: '00',
        timeUp: false
    }

componentDidMount() {
        setInterval(() => {
            const eventDate = +new Date(this.props.date);
            const differnce = eventDate - +new Date();

            if (differnce < 1) {
                this.setState({ timeUp: true });
            } else {
                let days =Math.floor(differnce / (1000 * 60 * 60 * 24));
                let hours = Math.floor((differnce / (100 * 60 * 60)) 
                % 24);
                let minutes = Math.floor((differnce / (1000 * 60)) % 60);
                let seconds = Math.floor((differnce / (1000)) % 60);
                this.setState({
                    hours: hours > 9 ? hours : `0${hours}`,
                    minutes: minutes > 9 ? minutes : `0${minutes}`,
                    seconds: seconds > 9 ? seconds : `0${seconds}`,
                    days
                });
            
        }
    }, 1000)
}


    render() {
        const {days, hours, minutes, seconds, timeUp } =
        this.state;
        const dayString = days > 1 ? 'days' : 'day';

        return (
            timeUp ?
            <h1>Planning our Next Event</h1>
        :
        <> 
        <div className="event-container">
            <h1 className="event-title">Upcoming Event:</h1>
            <h1 className="event-name">D&B Day of the Dead!</h1>
            <p  className="event-progress">{ `${days} ${dayString} ${hours} hours ${minutes} minutes ${seconds} seconds` }</p>
            </div>
            </>

        );
        
    }
}

export default CounDownTimer;