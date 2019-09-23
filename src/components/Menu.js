import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'darkgrey',
    color: 'black'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

const ButtonAppBar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [open, setOpen] = React.useState(false);

  function toggleDrawer(booleanValue) {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar className="App" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            align="center"
            className={classes.title}
            style={{ color: 'black' }}
          >
            The Batshow Ranking Site
          </Typography>
          {!isAuthenticated && (
            <Typography variant="h6" color="initial" className={classes.title}>
              <Link className="Link" to="/">
                <p>Home</p>
              </Link>
            </Typography>
          )}
          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})}>Log in</Button>
          )}
          {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <ul>
          <li>
            <Link className="Link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="Link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="Link" to="/addepisode">
              Add Episode
            </Link>
          </li>
          <li>
            <Link className="Link" to="/episoderating">
              Episode Ratings
            </Link>
          </li>
          <li>
            <Link className="Link" to="/tvshowepisodes">
              Tv Episodes
            </Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
};

export default ButtonAppBar;
