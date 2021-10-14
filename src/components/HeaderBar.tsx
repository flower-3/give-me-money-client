import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderBarMenu from './HeaderBarMenu';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      marginBottom: '50px',
      position: 'static',
    },
    tooBar: {
      display: 'flex',
      justifyContent: 'space-between',
      position: 'static',
    },
    title: { paddingRight: '120px' },
    textField: {
      marginLeft: '30px',
    },
  }),
);

export default function HeaderBar() {
  const classes = useStyles();
  const [isOpened, setIsOpened] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuItem, setMenuItem] = useState('HOME');
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpened(!isOpened);
    setAnchorEl(event.currentTarget);
  };
  const menuClick = (menuName: string) => {
    setMenuItem(menuName);
  };

  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.tooBar}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
            <HeaderBarMenu
              isOpened={isOpened}
              anchorEl={anchorEl}
              menuClick={menuClick}
            ></HeaderBarMenu>
            <MenuIcon />
            <Typography variant="h6" className={classes.textField}>
              {menuItem}
            </Typography>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Give Me Money
          </Typography>
          <img src="https://developers.kakao.com/tool/resource/static/img/button/login/simple/ko/kakao_login_small.png" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
