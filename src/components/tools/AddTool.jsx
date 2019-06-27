import React, {Component} from 'react';
import {} from "../common/form/TextInput";

import {TextInput, TextInput2, TextInput3} from '../common/form/TextInput';
import CheckInput from '../common/form/CheckInput';
import {Field, reduxForm} from 'redux-form';
import { BottomContent, Form, FormTop, H4, OtherH4, OtherOtherH4, SubmitButton, Wrapper, TriangleTop, H4Group, ImgPlaceholder,ContainerContainer, Container, Container2, Container3, Container4, Container5 } 
  from '../tools/AddToolStyle';


const locations = [{
    dbName: 'my_garage_only',
    label: 'My Garage Only'
},
    {
        dbName: 'my_network',
        label: 'My Network'
    },
    {
        dbName: 'rental',
        label: 'Rental'
    }

];


class AddTool extends Component {
    render() {
        const {handleSubmit, pristine, submitting} = this.props;
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
                <Form onSubmit={handleSubmit}>

                <Container>  
                    <ImgPlaceholder>**Add Awesome Looking Tool Here**</ImgPlaceholder>
                    <H4Group>   
                        <H4>This tool is available for:</H4>
                        {locations.map((location,i) => <Field name={location.dbName} key={i} type='checkbox' label={location.label} component={CheckInput}/>)}
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
                                name='length_of_rental'
                                placehodler='Length of Time' 
                                label='Length of Time'
                                component={TextInput2}
                            />
                            </Container4>
                                <SubmitButton disabled={pristine || submitting}>Add to My Tools</SubmitButton>
                        
                        
                    </Container5>
                </ContainerContainer>

                        
                    </Form>
                </BottomContent>
            </Wrapper>

        );
    }
}

export default reduxForm({form: 'addTool'})(AddTool);