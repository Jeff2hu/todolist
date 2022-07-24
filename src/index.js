import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import { LoginContextProvider } from './State/LoginContext';
import { TodoDataContextProvider } from './State/TodoDataContext';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <LoginContextProvider>
      <TodoDataContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TodoDataContextProvider>
    </LoginContextProvider> 
  // </React.StrictMode>
);


