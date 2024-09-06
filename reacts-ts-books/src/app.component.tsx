import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/navbar.component';
import { AuthorManageScreen } from './screens/author-manage.screen';
import { Footer } from './components/footer.component';

export const App = ()=>{
    return (
        <div>
            <NavBar title="World of Books"/>
            <div className='screen'>
                <AuthorManageScreen/>
            </div>
            <Footer>
                &copy; <a href='https://www.conceptarchitect.in'>Concept Architect</a>
            </Footer>
        </div>
    )
}