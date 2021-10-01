import React, { UseContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../../auth/UserContext';
import './Navigation.css';

function Navigation({ logout }) {
    const { currentUser } = useContext(UserContext);


    function loggedInNav() {
        return (
            <div>
                User Is Logged In!!
            </div>
        )
    }

    function loggedOutNav() {
        return (
            <div>
                Logged Out Nav!!
            </div>
        )
    }

    return (
        <div>
            { currentUser ? loggedInNav() : loggedOutNav() }
        </div>
    )

}

export default Navigation;