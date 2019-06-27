import styled, {css} from 'styled-components';

export const SearchContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
  height: 100%;
  width: 501px;
`;

export const SearchViewContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
`;

export const SubHeaderContainer = styled.div`
  width:100%;
  height:auto;
  background-color: white;
  display: flex;
  justify-content:center;
  align-items:flex-end;
  margin-top:20px;
`;

export const SubContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height: auto;
  width:33%;
  background-color:white;

`;

export const SubContainer1 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  height: auto;
  width:33%;
  background-color:white;
  padding-left: 10px;

`;

export const SubContainer2 = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  height: auto;
  width:33%;
  background-color:white;
  padding-left: 65px;
`;

export const FormSearch = styled.form`
  display: flex; 
  align-items: flex-end;
  `;

export const SearchButtons = styled.button `
  border-radius: 7px;
  border: 3px solid #488EAC;
  height: 38px;
  font-size: 2.4rem;
  font-weight: 600;
  color: #488EAC;
  margin-left: 20px;
  &:hover {
    background-color: #488EAC;
    color: #EDE3C2;
  }
  ${props => props.actionButton && css`
    
    border-radius: 10px;
    background-color: #488EAC;
    color: #EDE3C2;
    height: 48px;
    font-weight: 600;
    font-size: 2.4rem;
    &:hover {
      background-color: #ede3c2;
      color: #488EAC;
    }
    &:first-child {
      margin-right: 60px;
    }
    &:last-child {
      margin-right: 87px;
    }
`}
`;

export const H1 = styled.h1`
	
  color: #41340C;	
  font-size: 18px;	
  line-height: 25px;
`;

export const Bold = styled.h1`
	
  color: #41340C;	
  font-size: 18px;	
  line-height: 25px;
  font-weight: 600;
`;

export const Italic = styled.h1`
	
  color: #41340C;	
  font-size: 18px;	
  line-height: 25px;
  font-style: italic;
`;