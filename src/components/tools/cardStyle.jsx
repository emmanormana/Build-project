import styled, { css } from 'styled-components';

export const WelcomePageCard = styled.div`
	width: 30%;
	//@media (max-width: 1200px) {
	//  margin-bottom: 32px;
	//  margin-right: 0;
	//}
`;

export const CardHeader = styled.div`
	width: 100%;
	height: 58px;
	background-color: #daab1d;
	border: 3px solid #6e5710;
	color: #41340c;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;

	&:hover {
		background-color: #41340c;
		color: #daab1d;
	}
	a {
		font-size: 3.2rem;
		line-height: 4.4rem;
	}
`;

export const CardBody = styled.div`
	width: 100%;
	height: 302px;
	color: #41340c;
	background-color: #c0b594;
	margin-bottom: 10px;
	p {
		font-size: 2.8rem;
		line-height: 3.8rem;
		padding: 20px;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	height: 547px;
	width: 1264px;
	background-color: #ede3c2;
	margin-bottom: 20px;
`;

export const User = styled.p`
	width: 500px;
	height: 38px;
	font-size: 2.8rem;
	font-weight: 600;
	line-height: 3.8rem;
	text-align: center;
	color: #1e3a46;
	margin-top: 70px;
`;

export const QuickLink = styled.p`
	height: 25px;
	color: #1e3a46;
	font-size: 1.8rem;
	font-weight: 600;
	line-height: 25px;
	cursor: pointer;
	&:hover {
		text-decoration: underline;
	}
	${props => props.child && css`font-weight: 400;`};
`;

export const QuickLinkContainer = styled.div`
	height: 25px;
	color: #1e3a46;
	font-size: 1.8rem;
	font-weight: 600;
	line-height: 25px;
	margin-left: 696px;
`;

export const Trianglebox = styled.div`
	background-color: #c0b594;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 280px;
	width: 1264px;
	margin-top: -280px;
`;
