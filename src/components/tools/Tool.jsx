import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteTool} from "../../actions/toolActions";
import {
    Bold,
    ButtonContainer,
    H1,
    Italic,
    LargeSubContainer,
    SubContainer,
    ToolButton,
    ToolContainer,
    CheckBoxContainer, 
    H4FormText
} from './ToolStyle'
import toolImage from '../../imgs/luther-bottrill-1638257-unsplash.png';

const Tool = (props) => {
    return (

        <ToolContainer>

            <SubContainer>
                <H1>{`Loaned Out`}</H1> {/*figure out how to display this*/}
            </SubContainer>

            <SubContainer>
                <img src={toolImage} alt='A table saw!'/> {/*figure out how to import pic */}
            </SubContainer>

            <LargeSubContainer>
                <Bold>{props.tool.tool_name}</Bold>
                <Italic>{props.tool.tool_description}</Italic>
            </LargeSubContainer>

            <SubContainer>
                <H1> 
                    <CheckBoxContainer>
                        <input type='checkbox' name='my_garage_only' readOnly checked={props.tool.my_garage_only}/>
                        
                        <H4FormText>My Garage Only</H4FormText>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                        <input type='checkbox' name='my_network' readOnly checked={props.tool.my_network} />
                        <H4FormText>My Network</H4FormText>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                        <input type='checkbox' name='rental' readOnly checked={props.tool.rental}/>
                                    <H4FormText>Rental</H4FormText>
                                </CheckBoxContainer></H1>
            </SubContainer>







            <ButtonContainer>
                {props.tool.owner_id === props.userId && <ToolButton><Link to={`/dashboard/edit-tool/${props.tool.id}`}>{'Edit Tool'}</Link></ToolButton>}
                {props.tool.owner_id === props.userId && <ToolButton onClick={() => props.deleteTool(props.tool.id)}>{'Delete Tool'}</ToolButton>}
            </ButtonContainer>

        </ToolContainer>
    )
};

export default connect(null, {deleteTool})(Tool);
