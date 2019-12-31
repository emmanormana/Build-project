import styled, {css} from 'styled-components'

export const Image = styled.img`
  width: 100%;
  background: white;
  
  ${props => props.dashboard && css`
clip-path: polygon(50% 53%, 4% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 97% 100%);
`}
`;

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
  height: 424px;
  background-color: white;
  width: 100%;
  ${props => props.card && css`
    flex-direction: column;
`}
`;

export const Form = styled.form`
  display:flex; 
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: 501px;
  max-width: 620px;
  height: 501px;
  width: 620px;
  background-color: #EDE3C2;
  margin-bottom: 520px;
  margin-left:27em;
`;


export const FormTop = styled.div`
  width:100% ;
  height: 10% ;
  display:flex; 
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:30px;
  width:100% ;
  height: 90% ;

`;

export const InputPair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top:14px;
 

`;

export const SignInPair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
`;

export const CreateAccountContainer = styled.div`
  display: flex;
  width:400px;
  height:200px;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  justify-content: flex-start;
  margin-bottom: 178px;

`;

//^^^^^^^^^^^^^form containers^^^^^^^^^^^^^^^//



export const H4 = styled.h4`
  font-size: 3.2rem;
  margin-left: 31px;
  margin-top: 10px;
  font-weight:600;
  color: #41340C;
  line-height: 44px;
`;

export const Label = styled.label`
  height: 25px;
  color: #1e3a46;
  font-size: 1.8rem;
  line-height: 25px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ShortLabel = styled.label`
  height: 25px;
  color: #1e3a46;
  font-size: 1.8rem;
  line-height: 25px;

  margin-top: 0px;
  font-weight: 600;
`;



export const Input = styled.input`
  width: 501px;
  height: 40px;
  border: none;
  background: #e9e8e4;
  border-bottom: 1px solid #635710;     
`;

export const ShortInput = styled.input`
  width: 220px;
  height: 40px;
  border: none;
  background: #e9e8e4;
  border-bottom: 1px solid #635710; 
  
`;

export const LargeInput = styled.input`
  display:flex;
  justify-content:flex-start;
  width: 501px;
  height: 170px;
  border: none;
  background: #e9e8e4;
  border-bottom: 1px solid #635710;     
`;

export const SubmitButton = styled.button`
  width: 232px;
  height: 44px;
  border-radius: 6px;
  background-color: #DFEBF0;
  border: none;
  color: #869DA7;
  font-size: 3.2rem;
  font-weight: 600;
  line-height: 44px;
  text-align: center;
  margin-top: 28.32px;
  cursor: pointer;
  
  &:hover {
    background-color: #488EAC;
    color: #DFEBF0;
  }
`;

export const CreateAccountButton = styled.span`
  height: 63px;	
  width: 263px;	
  border: 3px solid #488EAC;	
  border-radius: 7px;
  margin-bottom:40px;
  background-color: white;
  font-size: 24px;	
  font-weight: 600;	
  line-height: 33px;	
  text-align: center;
  color: #488EAC;
  cursor: pointer;
  padding:15px 45px 15px 45px;

  &:hover {
    color: white;
    background-color: #488EAC;
  }
`;

export const ForgotPasswordLink = styled.div`
  height: 33px;	
  width: 197px;	
  color: #352720;	
  font-size: 24px;	
  line-height: 33px;
`;

export const NewTo = styled.p`
  height: 33px;	
  width: 248px;	
  color: #352720;	
  font-size: 24px;	
  line-height: 33px;
  margin-bottom: 30px;
  margin-top: 30px;

`;

