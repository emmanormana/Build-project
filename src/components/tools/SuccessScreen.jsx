import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// styles
import {
	BottomContent,
	Form,
	FormTop,
	H4,
	SubmitButton,
	Wrapper,
	TriangleTop,
	ButtonContainer,
} from '../tools/SuccessScreenStyle';

const SuccessScreen = ({ isSuccess }) => {
	return (
		<Wrapper>
			<FormTop>
				<TriangleTop>
					{isSuccess ? (
						<H4>Success! Your information has been updated!</H4>
					) : (
						<H4>An unknown error has occurred. Please try your request later</H4>
					)}
				</TriangleTop>
			</FormTop>

			<BottomContent>
				<Form>
					<ButtonContainer>
						<SubmitButton>
							<Link to='/dashboard/add-tool'>Add Tool</Link>
						</SubmitButton>
						<SubmitButton>
							<Link to='/dashboard/my-tools'> My Tools</Link>
						</SubmitButton>
						<SubmitButton>
							<Link to='/dashboard'>Go Home</Link>
						</SubmitButton>
					</ButtonContainer>
				</Form>
			</BottomContent>
		</Wrapper>
	);
};

const mapStateToProps = state => ({ isSuccess: state.toolList.isSuccess });

export default connect(mapStateToProps)(SuccessScreen);
