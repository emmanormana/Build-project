import React, {Component} from 'react';
import {} from "../common/form/TextInput";

import {TextInput, TextInput2, TextInput3} from '../common/form/TextInput';
import CheckInput from '../common/form/CheckInput';
import {Field, reduxForm} from 'redux-form';

import { BottomContent, Form, FormTop, H4, OtherH4, OtherOtherH4, SubmitButton, Wrapper, TriangleTop, H4Group, ImgPlaceholder,ContainerContainer, Container, Container2, Container3, Container4, Container5 } 
  from '../tools/AddToolStyle';
  



const locations = ['My Garage Only', 'My Network', 'Rental'];

class AddTool extends Component {
    render() {
        return (

            <Wrapper>

                <Container2>
                    <OtherH4>Add a Tool</OtherH4>
                </Container2>

                <TriangleTop>
                    <FormTop>
                        
                    </FormTop>
                </TriangleTop>
                <BottomContent>
                <Form>

                <Container>  
                    <ImgPlaceholder>**Add Awesome Looking Tool Here**</ImgPlaceholder>
                    <H4Group>   
                        <H4>This tool is available for:</H4>
                        {locations.map((location,i) => <Field name={location} key={i} type='checkbox' label={location} component={CheckInput}/>)}
                        </H4Group>
                </Container>

                <ContainerContainer>

                    <Container3>
                        <Field 
                            name='tool_name' 
                            placeholder='Tool Name' 
                            component={TextInput} 
                            label='Tool Name'
                        />

                        <Field 
                            name='tool_description' 
                            placeholder='Tool Description' 
                            component={TextInput3}
                            label='Tool Description'
                        />
                    </Container3>

                    <Container5>

                        <Container4>

                            <Field 
                                name='rental_price' 
                                placeholder='Price' 
                                label='Price' 
                                component={TextInput2}
                            />
                            
                            <OtherOtherH4>Per</OtherOtherH4>

                            <Field 
                                name='length_of_time' 
                                placehodler='Length of Time' 
                                label='Length of Time'
                                component={TextInput2}
                            />
                            </Container4>
                                <SubmitButton>Add to My Tools</SubmitButton>
                        
                        
                    </Container5>
                </ContainerContainer>

                        
                    </Form>
                </BottomContent>
            </Wrapper>
        );
    }
}

export default reduxForm({form: 'addTool'})(AddTool);