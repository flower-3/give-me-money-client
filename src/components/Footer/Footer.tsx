import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './style';
import FooterProfile from './FooterProfile';

interface Profile {
  name: string;
  position: string;
  instagramAddress: string;
  githubAddress: string;
}

export default function Footer() {
  const classes = useStyles();

  const profileList: Profile[] = [
    {
      name: '김건영',
      position: 'developer',
      instagramAddress: 'https://www.instagram.com/aengun_/',
      githubAddress: 'https://github.com/aengun',
    },
    {
      name: '박영운',
      position: 'developer',
      instagramAddress: 'https://instagram.com/_youngwoon/',
      githubAddress: 'https://github.com/youngpark17',
    },
    {
      name: '이주형',
      position: 'developer',
      instagramAddress: 'https://instagram.com/joooooooohy/',
      githubAddress: 'https://github.com/junam2',
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container direction="row" spacing={2} className={classes.grid}>
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item className={classes.profileGridItem} color="primary">
                  <Typography variant="body1">고객센터 : 1588-XXXX</Typography>
                </Grid>
                <Grid item className={classes.profileGridItem}>
                  <Typography variant="body1">주소 : none</Typography>
                </Grid>
              </Grid>
            </Grid>
            {profileList.map((row: Profile, index) => {
              return <FooterProfile key={index} {...row} />;
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">© 2021 All Rights Reserved</Typography>
      </Grid>
    </div>
  );
}
