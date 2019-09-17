import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return(
        <div className = 'navigation'>
            <Link to='/login'>Login</Link>
            <Link to='/protected'>Friends</Link>
        </div>
    )
}

export default Navigation;