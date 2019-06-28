import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import { TextInput } from './TextInput';
import { TextInput2 } from './TextInput';

// Styles
import {
	BottomContent,
	Form,
	FormTop,
	H4,
	InputGroup,
	InputPair,
	SubmitButton,
	Wrapper,
	ButtonContainer,
	SubmitButtonContainer,
	RouteButton,
	TriangleTop,
	H4FormText,
	FormGroup,
	H4Group,
} from '../../styles/requestToolFormStyle';

// Validators
const required = value => (value ? undefined : '*Required');

class RequestTool extends Component {
	render() {
		const { handleSubmit, pristine, submitting } = this.props;

		return (
			<Wrapper>
				<ButtonContainer>
					<RouteButton>Back to Borrow a Tool</RouteButton>
					<RouteButton>Back to Home</RouteButton>
				</ButtonContainer>

				<TriangleTop>
					<FormTop>
						<H4>Request A Tool</H4>
					</FormTop>
				</TriangleTop>

				<BottomContent>
					<Form onSubmit={handleSubmit}>
						<InputGroup>
							<InputPair>
								<Field
									type='text'
									name='tool_name'
									placeholder='Enter Tool Name'
									label='Tool Name'
									component={TextInput}
									validate={[ required ]}
								/>
							</InputPair>

							<H4FormText>within</H4FormText>

							<FormGroup>
								<H4FormText>Distance</H4FormText>
								<H4Group>
									<H4FormText>10 miles</H4FormText>
									<H4FormText>25 miles</H4FormText>
									<H4FormText>50 miles</H4FormText>
								</H4Group>
							</FormGroup>

							<H4FormText>of</H4FormText>

							<InputPair>
								<Field
									type='text'
									name='location'
									placeholder='Enter Zip'
									label='Zip Code'
									component={TextInput2}
									validate={[ required ]}
								/>
							</InputPair>
						</InputGroup>

						<SubmitButtonContainer>
							<SubmitButton type='submit' disabled={pristine || submitting}>
								Find Tool
							</SubmitButton>
						</SubmitButtonContainer>
					</Form>
				</BottomContent>
			</Wrapper>
		);
	}
}

export default reduxForm({ form: 'requestTool' })(RequestTool);
