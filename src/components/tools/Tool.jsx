import React from 'react'
import {ToolContainer, LargeSubContainer, SubContainer, ButtonContainer, ToolButton, H1, Bold, Italic} from './ToolStyle'


const Tool = (props) => {
  return (
   
    <ToolContainer>

      <SubContainer>
        <H1>{props.tool.location}</H1>  {/*figure out how to display this*/}
      </SubContainer>

      <SubContainer>
         <image>{props.tool.image}</image>  {/*figure out how to import pic */}
      </SubContainer>

      <LargeSubContainer>
        <Bold>{props.tool.tool_name}</Bold>
        <Italic>{props.tool.tool_description}</Italic>
      </LargeSubContainer>

      <SubContainer>
        <H1>{props.tool.status}</H1>{/*figure out how this is going to be displayed pic */}
      </SubContainer>

      <ButtonContainer>
        <ToolButton>{'Edit Tool '}</ToolButton>
        <ToolButton>{'Delete Tool'}</ToolButton>
      </ButtonContainer>

    </ToolContainer>
  )
};

export default Tool;
