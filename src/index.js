import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MenuTitleBar from './components/MenuTitleBar'

import Discord from './botDiscord/bot'

const Index = () => {
  return (
    <div>
      <App/>
    </div>
  )

}


ReactDOM.render(<MenuTitleBar/>, document.getElementById('menutitlebar'))
ReactDOM.render(<Index/>, document.getElementById('root'))

document.Discord = new Discord()