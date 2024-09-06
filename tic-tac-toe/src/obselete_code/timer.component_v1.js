import React from 'react';
import { If } from './if.component';


export class Timer extends React.Component {

    constructor(props){
        super(props);
        this.state={
            ms: 0,
            running: props.running,
            reset:false
        }
    }

    startButtonImage='/images/start.png'
    pauseButtonImage='/images/pause.png'
    resetButtonImage='/images/reset.png'

    _toggle=()=>{
        if (this.state.running && this.iid) {
            //pause it.
            clearInterval(this.iid);
            if(this.props.onPause){
                this.props.onPause(this.props.name, this.state.ms);
            }
        } else {
            this.iid = setInterval(() => {
                this.setState(state => state.ms += 100)
            }, 100);
        }
    }

    toggle = () => {

        this._toggle();

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

    componentDidMount=()=>{
        if(this.state.running)
            this.toggle();
        //console.log(`${this.props.name} s: ${this.state.running} p: ${this.props.running}`);
    }

    // static getDerivedStateFromProps(props,state){
    //     console.log(`p:${JSON.stringify(props)} s: ${JSON.stringify(state)} `);
    //     return {running: props.running}; // add to state.
    // }

    componentDidUpdate=(previousProps,previousState)=>{
       //console.log(`CDU: ${this.props.name} state: ${this.state.running} oldState: ${previousState.running} props:${this.props.running} `);
       if(this.props.running!==this.state.running){
            this._toggle();
            this.setState({running: this.props.running});
       } 

       if(this.props.reset){
            this.reset();
            this.props.onReset();
       }
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