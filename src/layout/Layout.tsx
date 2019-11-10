import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Page from './SEO';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(17, 17, 17);
}

body * {
  box-sizing: border-box;
}

p,
input,
textarea {
  color: white;
  font-size: 1rem;
  line-height: 1.2rem;
  font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
}

h1,
h2,
h3,
h4,
h5 {
  color: white;
  margin: 0;
  padding: 0;
  font-weight: 600;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

h3 {
  font-size: 2.5rem;
}

h4 {
  font-size: 2rem;
}

h5 {
  font-size: 1.5rem;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a,
button {
  text-decoration: none;
  cursor: pointer;
  border: 0;
  outline: none;
  padding: 0;
  font-size: inherit;
  color: blue;
}
`;

const Main = styled.main``;

const Layout: React.FC = props => (
  <Page title="BK Annual Report 2019">
    <Main>{props.children}</Main>
    <GlobalStyle />
  </Page>
);

export default Layout;
