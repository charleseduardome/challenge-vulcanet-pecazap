import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #fff;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: 'Lato', sans-serif;
  }

  #root {
    max-width: 1150px;
    margin: 0 auto;
    padding: 80px 0 0;
  }

  button {
    cursor: pointer;
  }
`;
