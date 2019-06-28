import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Images
import toolImage from '../../imgs/luther-bottrill-1638257-unsplash.png';

// Actions
import { deleteTool } from '../../actions/toolActions';

// Styles
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
	H4FormText,
} from './ToolStyle';

const Tool = ({
	userId,
	deleteTool,
	tool       : { tool_name, tool_description, my_garage_only, my_network, rental, id, owner_id },
}) => {
	return (
		<ToolContainer>
			<SubContainer>
				<H1>{`Loaned Out`}</H1> {/*figure out how to display this*/}
			</SubContainer>
			<SubContainer>
				<img src={toolImage} alt='A table saw!' /> {/*figure out how to import pic */}
			</SubContainer>
			<LargeSubContainer>
				<Bold>{tool_name}</Bold>
				<Italic>{tool_description}</Italic>
			</LargeSubContainer>
			<SubContainer>
				<H1>
					<CheckBoxContainer>
						<input type='checkbox' name='my_garage_only' readOnly checked={my_garage_only} />
						<H4FormText>My Garage Only</H4FormText>
					</CheckBoxContainer>
					<CheckBoxContainer>
						<input type='checkbox' name='my_network' readOnly checked={my_network} />
						<H4FormText>My Network</H4FormText>
					</CheckBoxContainer>
					<CheckBoxContainer>
						<input type='checkbox' name='rental' readOnly checked={rental} />
						<H4FormText>Rental</H4FormText>
					</CheckBoxContainer>
				</H1>
			</SubContainer>
			<ButtonContainer>
				{owner_id === userId && (
					<ToolButton>
						<Link to={`/dashboard/edit-tool/${id}`}>{'Edit Tool'}</Link>
					</ToolButton>
				)}
				{owner_id === userId && <ToolButton onClick={() => deleteTool(id)}>{'Delete Tool'}</ToolButton>}
			</ButtonContainer>
		</ToolContainer>
	);
};

export default connect(null, { deleteTool })(Tool);
