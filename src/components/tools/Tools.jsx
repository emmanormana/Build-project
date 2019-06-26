import React from 'react';
import Tool from './Tool';
import { connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    tools: state.toolList.tools
  }
}

const Tools  = (props) => {

    return (

      <div>
        {props.tools.map((tool) => <Tool key={tool.id} tool={tool} /> )}
      </div>
    )
}

export default connect(mapStateToProps, {})(Tools) 