import React from 'react';


export class Clock extends React.Component {

    state={
        time:new Date()
    }

    componentDidMount=()=>{
        this.iid=setInterval(()=>{
            this.setState({time:new Date()});
            console.log('time updated');
        },1000);
        console.log('component mounted');
    }

    componentWillUnmount(){
        console.log('clock unmounted');
        if(this.iid){
            clearInterval(this.iid);
            this.iid=null;
        }
    }

    render=()=>{

      
    
        return (
            <div className=''>
               {this.state.time.toLocaleTimeString()}
            </div>
        )
    };

}