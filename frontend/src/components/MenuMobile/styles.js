import styled from 'styled-components';
import devices from '../../styles/devices';

export const Container = styled.header`
  @media ${devices.desktop} {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  section {
    a + button {
      width: 100%;
      border: none;
      margin-top: 4px;
      text-transform: uppercase;
      font-size: 14px;
      color: #a8a8b3;
      font-weight: bold;
    }
  }
`;
