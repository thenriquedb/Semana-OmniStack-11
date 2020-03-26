import styled from 'styled-components';
import devices from '../../styles/devices';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin: 24px 0;
  }
`;

export const Incidents = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;

  @media ${devices.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Incident = styled.li`
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  strong {
    display: block;
    margin-bottom: 16px;
    color: #41414d;

    &:not(:first-child) {
      margin-top: 32px;
    }
  }

  p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }

  button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;

    &:hover {
      opacity: 0.8;
    }
  }
`;
