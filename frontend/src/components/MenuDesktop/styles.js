import styled from 'styled-components';
import devices from '../../styles/devices';

export const Container = styled.header`
  display: flex;
  align-items: center;

  p {
    font-size: 18px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a button {
    width: 250px;
    margin-left: auto;
    margin-top: 0;
  }

  @media ${devices.mobile} {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 15px;

  &:hover {
    border-color: #999;
    transition: border-color 0.2;
  }
`;
