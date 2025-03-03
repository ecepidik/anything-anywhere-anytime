import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import { AppApolloProvider } from './middleware/AppApolloProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);



declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <AppApolloProvider>
      <App />
    </AppApolloProvider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
