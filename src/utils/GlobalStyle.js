import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@media screen and (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 20px;
  }
}

@media screen and (min-width: 768px) {
  ::-webkit-scrollbar-track {
    background: #111827;
  }
}

@media screen and (min-width: 768px) {
  ::-webkit-scrollbar-thumb {
    background: #9333ea;
  }
}

body {
  margin: 0;
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul {
    list-style: none;
    padding-left: 0
}
a {
    transition: all 0.5s ease-out;
    :hover {
      color: #3b82f6;
    }
}
:root {
    --bg-color: white;
    --header-color: #171a21;
    --text-color: #c7d5e0;
    --link-color: #66c0f4;
    --link-hover-color: #ffffff;
    --accent-color: #5c7e10;
  }

  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  
  .InProgress {
    color: gray;
    animation: pulse 1s infinite;
  }
  .ButtonStyled {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 92px;
    border-radius: 4px;
    border: 1px solid #111827;
    transition: all 0.5s ease-out;
    &:hover {
        /* border: 1px solid #9333ea; */
        outline: none;
        cursor: pointer;
    }
  }
  .active {
    position: relative;
    color: #2196f3;
    transition: all 0.5s ease-out;
    @media screen and (min-width: 1024px) {
    ::after {
    position: absolute;
    content: "";
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #2196f3;
    }
  }
  }
.no-pointer {
    pointer-events: none;
}
`;
