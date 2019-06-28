import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

// Components
import { TextInput2 } from '../common/form/TextInput';

// Styles
import {
	Bold,
	FormSearch,
	Italic,
	SearchButtons,
	SearchContainer,
	SearchViewContainer,
	SubContainer,
	SubContainer1,
	SubContainer2,
	SubHeaderContainer,
} from './viewAllStyle';
const handleSubmit = e => e.preventDefault();
const ViewToolHeader = () => {
	return (
		<div>
			<SearchViewContainer>
				<SearchContainer>
					<FormSearch onSubmit={handleSubmit}>
						<Field name='search' type='text' component={TextInput2} label='Tool Search' placeholder='Coming Soon' />
						<SearchButtons>Coming Soon</SearchButtons>
					</FormSearch>
				</SearchContainer>
				<div>
					<SearchButtons actionButton>
						<Link to='/dashboard/view-my-tools'>Back to My Tools</Link>
					</SearchButtons>
					<SearchButtons actionButton>
						<Link to='/dashboard'>Back to My Home</Link>
					</SearchButtons>
				</div>
			</SearchViewContainer>

			<SubHeaderContainer>
				<SubContainer1>
					<Bold>Where is this Tool?</Bold>
				</SubContainer1>

				<SubContainer>
					<Bold>Tool Name</Bold>
					<Italic>Tool Description</Italic>
				</SubContainer>

				<SubContainer2>
					<Bold>Available For</Bold>
				</SubContainer2>
			</SubHeaderContainer>
		</div>
	);
};

export default reduxForm({ form: 'search' })(ViewToolHeader);
