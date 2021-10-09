import { Grid, Typography } from '@material-ui/core';
import { GitHub, Instagram } from '@material-ui/icons';
import React from 'react';
import { useStyles } from './style';

type ProfileProps = {
  name: string;
  position: string;
  instagramAddress: string;
  githubAddress: string;
};

export default function FooterProfile(props: ProfileProps) {
  const classes = useStyles();
  const { name, position, instagramAddress, githubAddress } = props;

  return (
    <Grid item xs={3}>
      <Grid container direction="column">
        <Grid item className={classes.profileGridItem}>
          <Typography variant="h6">{name}</Typography>
        </Grid>
        <Grid item className={classes.profileGridItem}>
          <Typography variant="body1">position : {position}</Typography>
        </Grid>
        <Grid item className={classes.profileGridItem}>
          <Instagram onClick={() => window.open(instagramAddress, '_blank')} />
          <GitHub onClick={() => window.open(githubAddress, '_blank')} />
        </Grid>
      </Grid>
    </Grid>
  );
}
