import React from 'react';
import { If } from './if.component';


export class Timer extends React.Component {

    state = {
        ms: 0,
        running: false
    }
    startButtonImage='/images/start.png'
    pauseButtonImage='/images/pause.png'
    resetButtonImage='/images/reset.png'

    toggle = () => {

        if (this.state.running && this.iid) {
            //pause it.
            clearInterval(this.iid);
        } else {
            this.iid = setInterval(() => {
                this.setState(state => state.ms += 100)
            }, 100);
        }

        this.setState(state => state.running = !state.running);
    }

    reset = () => {
        this.setState({ ms: 0, running: false });
        if (this.state.running && this.iid)
            clearInterval(this.iid);
    }

    zeroPadded=(value,digits=2)=>{
        let str=value.toString();
        let zeros= digits-str.length;
        return '0'.repeat(zeros) + str;

    }

    render = () => {

        let ms = this.state.ms;
        let _ms = ms % 1000;
        let seconds = Math.ceil((ms - _ms) / 1000);
        let minutes = Math.floor(seconds / 60);
        seconds -= minutes * 60;
        ms = _ms;

        return (
            <div className='timer-component'>
                <h3>{this.props.name}</h3>
                <div className='timer'>
                    <span className='minutes'>{this.zeroPadded(minutes)}:</span>
                    <span className='seconds'>{this.zeroPadded(seconds)}.</span>
                    <span className='milliseconds'>{this.zeroPadded(ms,3)}</span>
                </div>

                <If condition={!this.props.hideControls}>
                    <div className='same-row'>
                        <img
                            onClick={this.toggle}
                            alt='toggle'
                            src={this.state.running ? this.pauseButtonImage : this.startButtonImage}
                        />
                        
                        <img
                            onClick={this.reset}
                            alt='reset'
                            src={this.resetButtonImage}
                        />      
                    </div>
                </If>
            </div>
        )
    };

}