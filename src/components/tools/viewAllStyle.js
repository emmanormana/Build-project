import styled, {css} from 'styled-components';

export const SearchContainer = styled.div`
  height: 60px;
  width: 501px;
`;

export const SearchViewContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const FormSearch = styled.form`
  display: flex;
  justify-content: flex-end;
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
`;