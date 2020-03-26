import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  background-color: #e02041;
  color: #fff;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export default Button;
