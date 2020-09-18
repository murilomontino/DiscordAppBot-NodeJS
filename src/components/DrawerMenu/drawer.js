import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawer: {
    height: '90%',
    marginTop: '48px',
    marginLeft: '6px',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
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
  listBar: {
    top: '30%',
    height: 'auto',
    marginLeft: '6px',
    backgroundColor: 'var(--color-background-dark)',
    borderRadius: '1rem'

  },
  toolbar: {

    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

    '&:hover': {
      backgroundColor: 'var(--color-font-primary)'
    },

    '& .MuiListItemIcon-root': {
      color: 'var(--color-primary)',
    },
    
    '&:hover .MuiListItemIcon-root': {
      color: 'var(--color-primary-dark)',
    },

  },

  iconButton: {
    marginLeft: '1.5rem',
    fontSize: '32px',
  },

  textItem: {
    textAlign: 'center',
    '& 	.MuiListItemText-primary': {
      fontSize: '1.5rem',
      color: '#e5e7e7f1'
    }
  }


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
          [classes.drawer]: true,
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}

      classes={{
        paper: clsx({
          [classes.drawer]: true,
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}


    >


      <List className={classes.listBar} >

        <ListItem className={classes.toolbar} onClick={open ? handleDrawerClose : handleDrawerOpen} button>

          <ListItemIcon>
            
            {open ? <ChevronLeftIcon className={classes.iconButton} /> :
              <ChevronRightIcon className={classes.iconButton} />}
          
          </ListItemIcon>

        </ListItem >

        <Divider />

        <ListItem className={classes.toolbar} button>

          <ListItemIcon> <InboxIcon className={classes.iconButton} /> </ListItemIcon>
          <ListItemText className={classes.textItem} primary={open ? 'DEFAULT' : ''} />
        
        </ListItem >

        <ListItem className={classes.toolbar} button>
          <ListItemIcon> <InboxIcon className={classes.iconButton} /> </ListItemIcon>
          <ListItemText className={classes.textItem} primary={open ? 'DEFAULT' : ''} />
        </ListItem >

        <ListItem className={classes.toolbar} button>
          <ListItemIcon> <InboxIcon className={classes.iconButton} /> </ListItemIcon>
          <ListItemText className={classes.textItem} primary={open ? 'DEFAULT' : ''} />
        </ListItem >

      </List>

    </Drawer>

  );
}
