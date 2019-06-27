import styled, {css} from 'styled-components'



export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:white;
  height: 1053px;
  width: 100%;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 503px;
  background-color: white;
  width: 100%;
  ${props => props.card && css`
    flex-direction: column;
`}
`;

export const TriangleTop = styled.div`
	width: 0;
	height: 0;
	border-left: 610px solid transparent;
	border-right: 610px solid transparent;
	border-bottom: 274px solid #EDE3C2;
  display:flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FormTop = styled.div`
  display:flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  max-height: 274px;
  max-width: 1264px;
  height: 274px;
  width: 90%;

`;

export const Form = styled.form`
  display:flex; 
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  max-height: 503px;
  max-width: 1264px;
  height: 503px;
  width: 90%;
  background-color: #EDE3C2;

`;

export const ButtonContainer = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-evenly;
  align-items:center;
  height: 180px;
  width:100%;
  background-color:#EDE3C2;

`;





export const SubmitButton = styled.button`
  width: 270px;
  height: 48px;
  border-radius: 6px;
  background-color: #488EAC;
  border: none;
  color: #EDE3C2;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 44px;
  text-align: center;
  cursor: pointer;  
 ;

  &:hover {
    background-color: white;
    color: #488EAC;
  }
`;

export const H4 = styled.h4`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width:800px;
  font-size: 2.6rem;
  font-weight:600;
  color: #1E3A46;
  line-height: 38px;
  background-color: #EDE3C2;
margin-top:500px;
`;