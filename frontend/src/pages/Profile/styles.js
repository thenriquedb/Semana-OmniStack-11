import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
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

export const Incidents = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
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
