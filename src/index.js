import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MenuTitleBar from './components/MenuTitleBar'

const Index = () => {
  return (
    <div>
      <App/>
    </div>
  )

}


ReactDOM.render(<Index/>, document.getElementById('root'))
ReactDOM.render(<MenuTitleBar/>, document.getElementById('menu-title-bar'))

