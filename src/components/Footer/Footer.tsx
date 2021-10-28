import React from 'react';
import { AppBar, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginTop: 20,
  },
  appBottomBar: {
    top: 'auto',
    bottom: 0,
    height: '100%',
    marginTop: 10,
  },
  grid: {
    height: '100%',
  },
  gridItem: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appBottomBar}>
        <Grid container alignContent="center" className={classes.grid}>
          <Grid item xs={4} className={classes.gridItem}>
            <div>
              <Link href="#" variant="subtitle2" color="inherit">
                About
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link href="#" variant="subtitle2" color="inherit">
                Info
              </Link>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link href="#" variant="subtitle2" color="inherit">
                Policy
              </Link>
            </div>
            <Typography variant="subtitle2">© 2021 All Rights Reserved</Typography>
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            <Typography variant="subtitle2">Contact : aengun@icloud.com</Typography>
            <Typography variant="subtitle2">
              30, Pildong-ro 1-gil, Jung-gu, Seoul, Republic of Korea
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            <GitHub
              onClick={() => window.open('https://github.com/flower-3/give-me-money-client')}
            />
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
