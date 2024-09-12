import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/user.context';
import { User } from '../services/user';


export interface MembershipProps {


}

export interface UserMenuProps{
    user:User
}

const UserMenu = ({ user }:UserMenuProps) => {
    //console.log('in userMenu', user);

    const {logoutUser} = useUserContext();
    const navigate = useNavigate();

    const handleLogout=()=>{
        logoutUser();
    }
    
    
    return (<ul className="navbar-nav mb-2 mb-lg-0 d-flex">
        <li className="nav-item dropdown ">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className='avatar-image' src={user.photo||'/images/guest.png'} alt={user.name} />
                {user.name}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                <li><Link className="dropdown-item" to="/user/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/user/bookshelf">Bookshelf</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><button className="dropdown-item"
                    onClick={handleLogout}
                >Logout</button></li>
            </ul>
        </li>
    </ul>

    )
}


export const GuestMenu = () => {
    return (<ul className="navbar-nav mb-2 mb-lg-0 d-flex">
        <li className="nav-item dropdown ">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img className='avatar-image' src='/images/guest.png' alt='user' />
                Guest
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/user/login">Login</Link></li>
                <li><Link className="dropdown-item" to="/user/register">Register</Link></li>

            </ul>
        </li>
    </ul>);
}

export const Membership = (props: MembershipProps) => {

    let { user } = useUserContext();
    //console.log('in membership', user);
    if(user)
        return <UserMenu user={user} />
    else
        return <GuestMenu  />
   

}
