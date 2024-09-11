import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/navbar.component';
import { Footer } from './components/footer.component';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import { routes } from './routes';


export const App = () => {


  return (
        <Router>
          <div>
            <NavBar title="World of Books" />
            <div className='screen'>

              <Routes>

                {routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}

              </Routes>


            </div>
            <Footer>
              &copy; <a href='https://www.conceptarchitect.in'>Concept Architect</a>
            </Footer>
          </div>
        </Router>
  )
}

