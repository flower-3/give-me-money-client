import React from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    marginTop: 10,
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
});

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appBottomBar}>
        <Grid container alignContent="center" className={classes.grid}>
          <Grid item xs={4}>
            <GitHub />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">contact : </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </AppBar>
    </div>
  );
}
