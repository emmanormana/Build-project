import React from 'react';
import {Link} from 'react-router-dom';
const ComingSoon = props => {
    return (
        <>
            <h1>Coming Soon</h1>
            <button><Link to='/dashboard'>Return Home</Link></button>
            </>
    )
}

export default ComingSoon