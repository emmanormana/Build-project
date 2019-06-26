import styled from 'styled-components';

export const FooterStyle = styled.footer`
  height: 195px;
  width: 100%;

  .footer-container {
    display: flex;
    justify-content: space-between;
    margin-top: 26px;

    .left-content {
      margin-left: 75px;
    }

    .right-content {
      margin-right: 172px;
    }

    .text-content {
      margin-left: 13px;
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
