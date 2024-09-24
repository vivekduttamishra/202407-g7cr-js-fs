import {render,screen,fireEvent, act} from '@testing-library/react';

import SimpleUserLoginScreen from './simple-user-login-screen';


describe('SimpleUserLoginScreen', () => {

    it('should have the required UI',async ()=>{
        let component:any=null;
       
        render(<SimpleUserLoginScreen />, component);
          

        

        // expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
        // expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
        //expect(screen.getByRole('button')).toBeInTheDocument();
        

    })
    

})