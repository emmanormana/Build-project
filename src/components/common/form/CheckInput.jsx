import React from 'react';

// Styles
import { CheckBoxContainer, H4FormText } from '../../tools/AddToolStyle';

const CheckInput = ({ type, label, input, meta: { touched, error } }) => {
	return (
		<CheckBoxContainer>
			<input {...input} type={type} />

			<H4FormText>{label}</H4FormText>

			{touched && error && <span>{error}</span>}
		</CheckBoxContainer>
	);
};

export default CheckInput;
