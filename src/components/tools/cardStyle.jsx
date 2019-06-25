import styled, {css} from 'styled-components';

export const WelcomePageCard = styled.div`
 
  width: 30%;
  //@media (max-width: 1200px) {
  //  margin-bottom: 32px;
  //  margin-right: 0;
  //}
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 88px;
  background-color: #DAAB1D;
  border: 3px solid #6E5710;
  color: #41340C;
  display: flex;
  justify-content: center;
  align-items: center;
  
   &:hover {
      background-color: #41340C;
      color: #DAAB1D;
   }
   a {
    font-size: 3.2rem;
    line-height: 4.4rem;
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: 362px;
  color: #41340C;
  background-color: #C0B594;
  
  p {
    font-size: 2.8rem;
    line-height: 3.8rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;  
`;

export const User = styled.p`
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 3.8rem;
  text-align: center;
  color: #1E3A46;
`;

export const QuickLink = styled.p`
  height: 25px;
  color: #1E3A46;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 25px;
  
  ${props => props.child && css`
    font-weight: 400;
`}
`;

