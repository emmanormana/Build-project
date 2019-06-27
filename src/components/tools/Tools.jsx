import React from 'react';
import Tool from './Tool';
import {connect} from 'react-redux';
import ViewToolHeader from "./ViewToolHeader";


const Tools = (props) => {
    const {tools} = props;
    if (tools.length === 0) {
        return <h1>You have no tools</h1>
    } else {
        return (

            <div>
                <ViewToolHeader />
                {props.tools.map((tool) => <Tool key={tool.id} tool={tool}/>)}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const toolList = ownProps.all ? state.toolList.tools : state.toolList.tools.filter(tool => tool.owner_id === state.auth.user.id);
    return {
        tools: toolList
    }
};

export default connect(mapStateToProps, {})(Tools) 