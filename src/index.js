import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { router } from './utilities/router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#0ABF8C',
      main: '#0ABF8C',
      dark: '#0ABF8C',
      contrastText: '#fff',
    },
    secondary: {
      light: '#FEAF11',
      main: '#FEAF11',
      dark: '#FEAF11',
      contrastText: '#000',
    },
    info: {
      light: '#0ABF8C',
      main: '#0ABF8C',
      dark: '#0ABF8C',
      contrastText: '#fff',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
