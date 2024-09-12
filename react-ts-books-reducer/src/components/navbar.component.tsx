import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import { Link } from 'react-router-dom';
import { Membership } from './membership.component';
import { Authenticated } from './authenticated.component';



interface NavbarProps {
    title: string,
    slogan?: string,
    
}


export const NavBar = ({ title}: NavbarProps) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#">{title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/authors'>Authors</Link>
                        </li>
                        <Authenticated>
                            <li className="nav-item">
                                <Link className="nav-link" to="/author/add" >Add Author</Link>
                            </li>
                        </Authenticated>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/books">Books</Link>
                        </li>
                        <Authenticated>                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/book/add">Add Book</Link>
                            </li>
                        </Authenticated>


                    </ul>

                    <Membership/>
                   

                </div>
            </div>
        </nav>
    );

}

