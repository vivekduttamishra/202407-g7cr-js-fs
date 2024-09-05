import React from 'react';

export class RestartButton extends React.Component {

    constructor(props){
        super(props);
        console.log('RestartButton created');
    }

    componentDidMount(){
        console.log('RestartButton mounted');
    }

    componentWillUnmount(){
        console.log('RestartButton unmounted');
    }


    render = () => {
        const {onRestart}= this.props;

        // if(!onRestart)
        //     return null; //do not display any ui

        let style = {}; //default style from css

        if (!onRestart) {

            onRestart = null;
            style = {
                backgroundColor: "gray",
                cursor: 'not-allowed',
            }
        }

        return (
            <button style={style}
                onClick={onRestart}
                className='restart-component'>
                Play Again!
            </button>
        )
    }
}