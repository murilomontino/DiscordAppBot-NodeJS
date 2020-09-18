import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import './styles.css'


const {  ChevronLeftIcon, ChevronRightIcon, InboxIcon } = require('./components/icons').icons()
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawerOpen: {
    width: drawerWidth,
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    }
  },
  
}));

export default function MiniDrawer() {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

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

        <ListItem className='toolbar' onClick={open ? handleDrawerClose : handleDrawerOpen} button>

          <ListItemIcon>
            
            {open ? <ChevronLeftIcon className='iconButton'/> :
              <ChevronRightIcon className='iconButton'/>}
          
          </ListItemIcon>

        </ListItem >

        <Divider />

        <ListItem className='toolbar' button>

          <ListItemIcon> <InboxIcon className='iconButton' /> </ListItemIcon>
          <ListItemText className='textItem' primary={open ? 'DEFAULT' : ''} />
        
        </ListItem >

      </List>

    </Drawer>

  );
}
