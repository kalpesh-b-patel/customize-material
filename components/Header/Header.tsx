import { AppBar, Button, Container, Icon, IconButton, makeStyles, Toolbar, Tooltip, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import BrightnessHigh from '@material-ui/icons/BrightnessHigh';
import BrightnessLow from '@material-ui/icons/BrightnessLow';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    cursor: 'pointer',
  },
}));

const Header = () => {
  const classes = useStyles();
  const { value, setValue } = useContext(DarkModeContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
              <MenuIcon fontSize="large" />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Custom Theme
            </Typography>
            <Tooltip title={`Switch to ${value ? 'Light' : 'Dark'} mode`}>
              {value ?
                <BrightnessHigh fontSize="large" className={classes.icon} onClick={() => setValue(false)} /> :
                <BrightnessLow fontSize="large" className={classes.icon} onClick={() => setValue(true)} />}
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar >
    </div>
  );
};
export default Header;