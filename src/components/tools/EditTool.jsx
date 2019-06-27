import React, {Component} from 'react';
import {connect} from 'react-redux';
import {putTool} from "../../actions/toolActions";
import {
    BottomContent,
    CheckBoxContainer,
    Container,
    Container2,
    Container3,
    ContainerContainer,
    Form,
    FormTop,
    H4,
    H4FormText,
    H4Group,
    ImgPlaceholder,
    OtherH4,
    TriangleTop,
    Wrapper, Container4, Container5, SubmitButton
} from '../tools/AddToolStyle';
import {LabelPair} from '../styles/createAccountStyle';
import {InputPair, Label, LargeInput, ShortLabel, ShortInput, Input} from "../styles/signInFormStyle";

class EditTool extends Component {
    state = {};

    onHandleChange = e => this.setState({...this.state, [e.target.name]: e.target.value});
    onHandleCheckChange = e => this.setState({...this.state, [e.target.name]: e.target.checked});
    onHandleSubmit = async e => {
        e.preventDefault();
        await this.props.putTool(this.state);
        this.props.history.push('/dashboard/status');
    };

    render() {
        return (
            <Wrapper>
                <Container2>
                    <OtherH4>Edit Tool</OtherH4>
                </Container2>
                <TriangleTop>
                    <FormTop/>
                </TriangleTop>
                <BottomContent>
                    <Form onSubmit={this.onHandleSubmit}>
                        <Container>
                            <ImgPlaceholder>**Add Awesome Looking Tool Here&&</ImgPlaceholder>
                            <H4Group>
                                <H4>This tool is available for:</H4>
                                <CheckBoxContainer>
                                    <input type='Checkbox' name='my_garage_only' checked={this.state.my_garage_only}
                                           onChange={this.onHandleCheckChange}/>
                                    <H4FormText>My Garage Only</H4FormText>
                                </CheckBoxContainer>
                                <CheckBoxContainer>
                                    <input type='Checkbox' name='my_garage_only' checked={this.state.my_network}
                                           onChange={this.onHandleCheckChange}/>
                                    <H4FormText>My Network</H4FormText>
                                </CheckBoxContainer>
                                <CheckBoxContainer>
                                    <input type='Checkbox' name='my_garage_only' checked={this.state.rental}
                                           onChange={this.onHandleCheckChange}/>
                                    <H4FormText>Rental</H4FormText>
                                </CheckBoxContainer>
                            </H4Group>
                        </Container>
                        <ContainerContainer>
                            <Container3>
                                <InputPair>
                                    <LabelPair>
                                        <Label>Tool Name</Label>
                                    </LabelPair>
                                    <Input placeholder='Tool Name' type='text' name='tool_name'
                                           value={this.state.tool_name} onChange={this.onHandleChange}/>
                                </InputPair>
                                <InputPair>
                                    <LabelPair>
                                        <Label>Tool Description</Label>
                                    </LabelPair>
                                    <LargeInput placeholder='Tool Description' type='textarea' name='tool_description'
                                           value={this.state.tool_description} onChange={this.onHandleChange}/>
                                </InputPair>
                            </Container3>
                            <Container5>
                                <Container4>
                                    <InputPair>
                                        <LabelPair>
                                            <ShortLabel>Price</ShortLabel>
                                        </LabelPair>
                                        <ShortInput placeholder='Tool Name' type='text' name='rental_price'
                                               value={this.state.rental_price} onChange={this.onHandleChange}/>
                                    </InputPair>
                                    <InputPair>
                                        <LabelPair>
                                            <Label>Length of Rental</Label>
                                        </LabelPair>
                                        <ShortInput placeholder='Length of Rental' type='text' name='length_of_rental'
                                               value={this.state.tool_name} onChange={this.onHandleChange}/>
                                    </InputPair>
                                </Container4>
                                <SubmitButton>Update Tool</SubmitButton>
                            </Container5>
                        </ContainerContainer>
                    </Form>
                </BottomContent>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({tool: state.toolList.tools[ownProps.match.params.id]});
export default connect(mapStateToProps, {putTool})(EditTool);