import React from 'react';
import Tool from './Tool';
import {connect} from 'react-redux';
import ViewToolHeader from "./ViewToolHeader";
import {
    BottomContent,
    ButtonContainer,
    Form,
    FormTop,
    H4,
    SubmitButton,
    TriangleTop,
    Wrapper
} from "./SuccessScreenStyle";
import {Link} from "react-router-dom";


const Tools = (props) => {
    const {tools, user_id} = props;
    if (tools.length === 0) {
        return (<Wrapper>

            <FormTop>
                <TriangleTop>
                    <H4>You have no tool currently listed at this time</H4>
                </TriangleTop>
            </FormTop>


            <BottomContent>
                <Form>
                    <ButtonContainer>
                        <SubmitButton><Link to='/dashboard/add-tool'>Add Tool</Link></SubmitButton>
                        <SubmitButton><Link to='/dashboard/my-tools'>My Tools</Link></SubmitButton>
                        <SubmitButton><Link to='/dashboard'>Home</Link></SubmitButton>
                    </ButtonContainer>
                </Form>
            </BottomContent>


        </Wrapper>)
    } else {
        return (

            <div>
                <ViewToolHeader />
                {props.tools.map((tool) => <Tool key={tool.id} tool={tool} userId={user_id} />)}
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const toolList = ownProps.all ? state.toolList.tools : state.toolList.tools.filter(tool => tool.owner_id === state.auth.user.id);
    return {
        tools: toolList, user_id: state.auth.user.id
    }
};

export default connect(mapStateToProps, {})(Tools) 