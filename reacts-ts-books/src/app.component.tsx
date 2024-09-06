import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/navbar.component';
import { BookManageScreen } from './screens/book-manage.screen';
import { Footer } from './components/footer.component';

export const App = ()=>{
    return (
        <div>
            <NavBar/>
            <div>
                <BookManageScreen/>
            </div>
            <Footer/>
        </div>
    )
}