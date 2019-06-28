import styled from 'styled-components';


export const ToolContainer = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  height: 173px;
  width:100%;
  background-color:white;
`;

export const LargeSubContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  height: 133px;
  width:433px;
  margin-top:10px;
  padding-top:20px;
  background-color:white;
`;

export const SubContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: 133px;
  width:200px;
  margin-top:10px;
  background-color:white;
`;

export const ButtonContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  align-items:center;
  height: 133px;
  width:200px;
  margin-top:10px;
  background-color:white;
`;

export const ToolButton = styled.span`
  height: 49px;	
  width: 166px;	
  border: 3px solid #488EAC;	
  border-radius: 7px;
  margin-bottom:0px;
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





export const H1 = styled.h1`
	
  color: #41340C;	
  font-size: 18px;	
  line-height: 25px;
`;

export const Bold = styled.h1`
	text-align:center
  color: #41340C;	
  font-size: 18px;	
  line-height: 25px;
  font-weight: 600;
`;

export const Italic = styled.h1`
		text-align:center

  color: #41340C;	
  font-size: 18px;	
  line-height: 25px;
  font-style: italic;
`;

export const H4FormText = styled.h4`
  display:flex;
  align-items: flex;
  justify-content: flex-start;
  height: auto;
  width:220px;
  /* font-size: 1.8rem; */
  font-weight:600;
  color: #41340C;
  line-height: 25px;

`;

export const CheckBoxContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: auto;
width:220px;
font-size: 1.8rem;
font-weight:600;
color: #1E3A46;
line-height: 25px;
`;

