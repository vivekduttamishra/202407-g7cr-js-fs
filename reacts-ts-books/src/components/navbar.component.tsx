import React from 'react';
import 'bootstrap/dist/js/bootstrap'
import { Link } from 'react-router-dom';



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
                        <li className="nav-item">
                            <Link className="nav-link" to="/author/add" >Add Author</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/books">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book/add">Add Book</Link>
                        </li>


                    </ul>

                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
                        <li className="nav-item dropdown ">
                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Members
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/user/login">Login</Link></li>
                                <li><Link className="dropdown-item" to="/user/register">Register</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/user/logout">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );

}

