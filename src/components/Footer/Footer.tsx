import React from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';
import { useStyles } from './style';
import { GitHub } from '@material-ui/icons';

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
