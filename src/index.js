import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  /** Put your mantine theme override here */
});
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
    <App />
    </MantineProvider>
  </React.StrictMode>
);

