import React, { useState, useEffect } from 'react';
import { withFieldset } from '../../hocs/with-fieldset';


export interface UserLoginScreenProps {


}


let UserLoginScreen = (props: UserLoginScreenProps) => {


    return (

        <div className='UserLoginScreenComponent'>

            
                <div className="row">
                    <div className="col-6">
                        <div className="mb-3">
                            {/* <label htmlFor="basic-url" className="form-label">Your vanity URL</label> */}
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon3">Email</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            {/* <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div> */}
                        </div>
                        <div className="mb-3">
                            {/* <label htmlFor="basic-url" className="form-label">Your vanity URL</label> */}
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon3">Password</span>
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                            </div>
                            {/* <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div> */}
                        </div>

                        <button className='btn btn-primary form-control'>Login</button>

                    </div>

                    <div className="col-6">
                    </div>
                </div>
            
           

        </div>
    );

}

UserLoginScreen = withFieldset(UserLoginScreen,"User Login");


export default UserLoginScreen;