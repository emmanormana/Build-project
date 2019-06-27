import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import { BottomContent, Form, FormTop, H4, SubmitButton, Wrapper, TriangleTop,  ButtonContainer } from '../tools/SuccessScreenStyle';



const SuccessScreen = props => {
    return (

        <Wrapper>

        <FormTop>
            <TriangleTop>            
            {props.isSuccess ? <H4>Success!  Your tool has been added to My Tools</H4> : <H4>An unknown error has occurred.  Please try your request later</H4>}
            </TriangleTop>
        </FormTop>


        <BottomContent>
            <Form>
                <ButtonContainer>
                    <SubmitButton><Link to='/dashboard/add-tool'>Add Another Tool</Link></SubmitButton>
                    <SubmitButton><Link to='/dashboard/my-tools'>Go to My Tools</Link></SubmitButton>
                    <SubmitButton><Link to='/dashboard'>Go Home</Link></SubmitButton>
                </ButtonContainer>
            </Form>
        </BottomContent>


        </Wrapper>
    )
}

const mapStateToProps = state => ({isSuccess:state.toolList.isSuccess});

export default connect(mapStateToProps)(SuccessScreen);