import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

    return(
        <div className = 'navigation'>
            <Link to='/login'>Login</Link>
            <Link to='/protected'>Friends</Link>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Navigation;