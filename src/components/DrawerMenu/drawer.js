import React, { useState } from 'react';
import clsx from 'clsx';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import { useStyles } from './components/transitionStyle';
import './styles.css'
import Item from './components/Item';
import { useRouter } from '../../context/ContextRouter';
import { useAuthentication } from '../../context/ContextAuthentication';



const { ChevronLeftIcon, ChevronRightIcon, PersonIcon, 
  ExitToAppIcon, MusicNoteIcon, MenuBookIcon } = require('./components/icons').icons()

export default function MiniDrawer() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
  const { itensMenu } = useRouter()
  const { HandleLogout } = useAuthentication()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Drawer
      variant="permanent"

      className={
        clsx({
          'drawer': true,
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}

      classes={{
        paper: clsx({
          'drawer': true,
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}


    >


      <List className='listBar' >

        {open ?
          <Item Icon={ChevronLeftIcon} arrow onClick={handleDrawerClose} /> :
          <Item Icon={ChevronRightIcon} arrow onClick={handleDrawerOpen} />
        }

        <Divider />

        
        <Item Icon={PersonIcon} firstPage title={itensMenu.PERFIL}  name={'Perfil'} />
        <Item Icon={MusicNoteIcon} title={itensMenu.SOUNDPAD}  name={'SoundPad'} />
        <Item Icon={MenuBookIcon} title={itensMenu.TESTES}  name={'Testes de Tela'} />

        
        <Divider />
        <Item Icon={ExitToAppIcon} onClick={HandleLogout} name={'Logout'} />
        


      </List>

    </Drawer>

  )
}
