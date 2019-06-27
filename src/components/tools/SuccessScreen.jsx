import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

const SuccessScreen = props => {
    return (
        <>
            {props.isSuccess ? <h1>Success!  Your tool has been added to My Tools</h1> : <h1>An unknown error has occurred.  Please try your request later</h1>}
            <button><Link to='/dashboard/add-tool'>Add Another Tool</Link></button>
            <button><Link to='/dashboard/my-tools'>Go to My Tools</Link></button>
            <button><Link to='/dashboard'>Go Home</Link></button>
            </>
    )
};

const mapStateToProps = state => ({isSuccess:state.toolList.isSuccess});

export default connect(mapStateToProps)(SuccessScreen);