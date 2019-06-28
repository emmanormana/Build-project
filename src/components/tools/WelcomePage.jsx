import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Images
import heroImage from '../../imgs/Hero Image.png';

// Component
import Card from './Card';

// Images
import { CardContainer, QuickLink, QuickLinkContainer, Trianglebox, User } from './cardStyle';
import { BottomContent, Image, Wrapper } from '../styles/signInFormStyle';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const WelcomePage = ({ cards, first_name }) => {
	const [ toggle, setToggle ] = useState(false);
	return (
		<Wrapper>
			<Image dashboard src={heroImage} alt='Various Tools' />

			<Trianglebox>
				<User>{`Welcome ${first_name}!`}</User>
				<QuickLinkContainer>
					<QuickLink onClick={() => setToggle(!toggle)}>
						Quick Links<FontAwesomeIcon icon={faCaretDown} />
					</QuickLink>

					{toggle && (
						<Link to='/dashboard/add-tool'>
							<QuickLink child>Add a Tool</QuickLink>
						</Link>
					)}

					{toggle && (
						<Link to='/dashboard/borrow-tool' onClick={() => setToggle(!toggle)}>
							<QuickLink child>Borrow a Tool</QuickLink>
						</Link>
					)}
				</QuickLinkContainer>
			</Trianglebox>

			<BottomContent card>
				<CardContainer>{cards.map((card, i) => <Card card={card} key={i} />)}</CardContainer>
			</BottomContent>
		</Wrapper>
	);
};

const mapStateToProps = state => ({ first_name: state.auth.user.first_name });

export default connect(mapStateToProps)(WelcomePage);
