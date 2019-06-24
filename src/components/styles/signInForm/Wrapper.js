import styled from 'styled-components'


export default  styled.section`
display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    max-height: 501px;
    max-width: 620px;
    height: 501px;
    width: 100%;
    background-color: #EDE3C2;
    margin-top: -720px;
    margin-bottom: 210px;

    h4 {
      font-size: 3.2rem;
      margin-left: 31px;
      margin-top: 16px;
    }

    .input-group {
      //display: flex;
      //flex-direction: column;
      //align-items: flex-start;
      margin-top: 100px;
      margin-left: 60px;

      .form-group {

        &:first-child {
          margin-bottom: 48px;
        }

        label {
          height: 25px;
          color: #1e3a46;
          font-size: 1.8rem;
          line-height: 25px;
          margin-left: 13px;
        }


        input {

          width: 501px;
          height: 40px;
          border: none;
          background: #e9e8e4;
          border-bottom: 1px solid #635710;

          &:first-child {
            margin-bottom: 48px;
          }
        }

        &:last-child {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        a {
          margin-top: 5px;
          font-size: 2.4rem;
          line-height: 33px;
          color: #352720;

        }

        button {
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
        }

      }
    }
  }

  .bottom-content {
    height: 450px;
    background-color: white;
    width: 100%;
  }
}
`;



