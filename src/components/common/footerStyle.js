import styled from 'styled-components';

export const FooterStyle = styled.footer`
  height: 195px;
  width: 100%;
  background-color: #488EAC;
  display: flex;
  justify-content: center;

  .footer-container {
    display: flex;
    justify-content: center;
    width: 100%;

    .left-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction:column;
      width:33%;
    }
    .center-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction:column;
      width:33%;
    }

    .right-content {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction:column;
      width:33%;
    }

    .text-content {
      margin-top: 13px;

    }

    h4, p {
      line-height: 27px;
      font-size: 2rem;
      color: #EDE3C2;
    }

    h4 {
      font-weight: 600;
    }
  }

`;
