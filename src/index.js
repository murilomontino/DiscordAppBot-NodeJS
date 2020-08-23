import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MenuTitleBar from './components/MenuTitleBar'

const Index = () => {
  return (
    <div>
      <MenuTitleBar/>
      <App/>
    </div>
  )

}


ReactDOM.render(<Index/>, document.getElementById('root'))


