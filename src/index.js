import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MenuTitleBar from './components/MenuTitleBar'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <MenuTitleBar/>
  </React.StrictMode>,
  document.getElementById('menutitlebar')
)


