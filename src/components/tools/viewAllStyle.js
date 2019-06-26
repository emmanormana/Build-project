import styled, {css} from 'styled-components';

export const SearchContainer = styled.div`
  height: 60px;
  width: 501px;
  margin-top: 25px;  
`;

export const SearchViewContainer = styled.div`
  background-color: #EDE3C2;
  display: flex;
  justify-content: space-between;
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