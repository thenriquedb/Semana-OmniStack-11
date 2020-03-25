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

  @media ${device.mobile} {
    flex-direction: column;
    padding: 60px 10px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;

  img {
    margin-bottom: 8vh;
  }

  h1 {
    font-size: 4vh;
    margin-bottom: 4vh;
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
    margin-right: 0;

    img {
      margin-top: 50px;
      margin-bottom: 14px;
      height: 16vh;
    }
    h1 {
      text-align: center;
    }
  }
`;

export const HeroesImg = styled.img`
  src: ${(props) => props.src};
  height: 80vh;

  @media ${device.mobile} {
    height: 40vh;
  }
`;
