import styled from 'styled-components'

export const LargerSubmitButton = styled.button`
  width: 235px;
  height: 44px;
  border-radius: 6px;
  background-color: #DFEBF0;
  border: none;
  color: #869DA7;
  font-size: 3rem;
  font-weight: 600;
  line-height: 44px;
  text-align: center;
  margin-top: 28.32px;
  margin-bottom: 10px;

  cursor: pointer;
  
  &:hover {
    background-color: #488EAC;
    color: #DFEBF0;
  }
`;


export const UserThumbnail = styled.span`
 box-sizing: border-box;	
 height: 241px;	
 width: 241px;	
 border: 1px solid #979797; 
 border-radius:125px;
  
`;

export const TestamonialContainer = styled.div`
  display: flex;
  width:400px;
  height:200px;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  justify-content: flex-start;
  margin-bottom: 490px;
`;

export const TestamonialText = styled.p`
	height: 175px;	
  width: 320px;	
  color: #41340C;	
	font-size: 18px;	
  line-height: 25px;
`;

export const TestamonialName = styled.p`
  margin-left:175px;
	height: 25px;	
  width: 129px;	
  color: #41340C;	
  font-size: 18px;	
  font-style: italic;	
  line-height: 25px;
`;

export const WarningRequired = styled.span`
  height: 25px;
  color: red;
  font-size: 1.3rem;
  line-height: 25px;
  margin-left: 20px;
  font-weight: 600;
`;

export const NameInputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:40px;
  width:81% ;
`;

export const CreateAccountInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width:100% ;
  height: 90% ;

`;