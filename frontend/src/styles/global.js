import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  html, body, #root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background-color: #f0f0f5;
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

  button { 
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
    color:#fff;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(90%)
    }
  }

form input {
  width: 100%;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
}
`;
