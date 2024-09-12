import React from "react";
import { withRouter } from "../utils/with-router";


export class WelcomeScreen extends React.Component<any>{
    
    
    render =()=>{
        const handleNavigate = () => {
            this.props.history('/');
        }

        console.log('this.props', this.props);

        return <div>
            <h2>Welcome {this.props.params.name} </h2>
            <button onClick={handleNavigate}>Go to Home</button>
        
        </div>
    }
}

//export default withRouter(WelcomeScreen);

export default withRouter(WelcomeScreen);