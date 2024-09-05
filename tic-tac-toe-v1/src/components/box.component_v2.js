import React from 'react';

export class Box extends React.Component{

  constructor(props){
    super(props);

    this.state={
        value: this.props.value
    }
  }

  clickHanlder=()=>{
       console.log(`Box ${this.props.id} clicked with value ${this.state.value}`);
       let value = this.state.value==='O'?'X':'O';
       this.setState({value})
       //console.log(`state value modified to ${this.state.value}`);  
       this.props.onCellClick(this.props.id);  
   }

    render=()=>{

        let clickHandler= this.props.value?null:()=>this.props.onCellClick(this.props.id);


        return (
            <button onClick={clickHandler} 
                    className='box-component'>
               {this.props.value}
            </button>
        )
    }
};