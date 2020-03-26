import styled from 'styled-components';
import device from '../../styles/devices';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1128px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 96px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media ${device.mobile} {
    flex-direction: column;
    padding: 60px 20px;
  }

  @media ${device.tablet} {
    flex-direction: column;
    padding: 60px 20px;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 8vh 0 4vh;
    font-size: 6vh;
  }

  p {
    font-size: 3vh;
    color: #737380;
    line-height: 32px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414d;
    font-weight: 500;

    svg {
      margin-right: 10px;
    }
  }

  @media ${device.mobile} {
    img {
      display: none;
    }

    h1 {
      margin-top: 18vh;
    }
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: column;

    max-width: 480px;
    margin-top: 100px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }

  textarea {
    margin-top: 8px;
  }
`;
