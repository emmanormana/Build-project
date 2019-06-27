import styled, {css} from 'styled-components'

///////////////////////// Containers////////////////////////////

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:white;
`;


export const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  width: 100%;
  ${props => props.card && css`
    flex-direction: column;
`}
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

export const TriangleTop = styled.div`
	width: 0;
	height: 0;
	border-left: 610px solid transparent;
	border-right: 610px solid transparent;
	border-bottom: 274px solid #EDE3C2;
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
  margin-bottom: 40px;

`;

export const SubmitButtonContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  height: auto;
  width:100%;
  background-color:#EDE3C2;
`;

export const ButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:flex-start;
  height: 180px;
  width:90%;
  background-color:white;
  
`;

export const InputGroup = styled.div`
  display:flex; 
  justify-content: space-evenly;
  align-items: center;
  max-height: 503px;
  max-width: 1264px;
  height: 200px;
  width: 100%;
  padding-bottom:110px;
`;

export const InputPair = styled.div`
  width:auto;
  height:auto;

`;

export const FormGroup = styled.div`
  display:flex; 
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  max-height: 100px;
  max-width: 88px;
  height: auto;
  width: 88px;
  margin-top:80px;
  
`;

export const H4Group = styled.div`
  flex-direction:column;
  display:flex; 
  justify-content: space-evenly;
  align-items: center;
  max-height: 503px;
  max-width: 1264px;
  height: auto;
  width: 100%;
  border: 2px solid #869DA7;`;



///////////////////////// Containers////////////////////////////

export const RouteButton = styled.span`
  border: 3px solid #488EAC;	
  border-radius: 7px;
  margin-left:70%;
  background-color: white;
  font-size: 24px;	
  font-weight: 600;	
  line-height: 33px;	
  text-align: center;
  color: #488EAC;
  cursor: pointer;
  padding:5px 10px;
  &:hover {
    color: white;
    background-color: #488EAC;
  }
`;

export const H4 = styled.h4`
  display:flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width:300px;
  font-size: 3.2rem;
  font-weight:600;
  color: #41340C;
  line-height: 44px;
`;

export const H4FormText = styled.h4`
  display:flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width:Auto;
  font-size: 1.8rem;
  font-weight:600;
  color: #1E3A46;
  line-height: 25px;

`;

export const SubmitButton = styled.button`
  width: 240px;
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
  margin-right:254px;
  margin-top: 0px;

  &:hover {
    background-color: white;
    color: #488EAC;
  }
`;




