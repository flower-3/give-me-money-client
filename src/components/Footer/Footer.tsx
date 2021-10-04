import React from 'react';
import { Grid, Table, TableContainer, Typography } from '@material-ui/core';
import { useStyles } from './style';
import { Instagram, GitHub } from '@material-ui/icons';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container direction="row" spacing={2} className={classes.grid}>
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item style={{ display: 'flex' }} color="primary">
                  <Typography variant="body1">고객센터 : 1588-XXXX</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }}>
                  <Typography variant="body1">주소 : 안알랴줌</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item style={{ display: 'flex' }}>
                  <Typography variant="h6">김건영</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }}>
                  <Typography variant="body1">직책 : 얼굴마담</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }}>
                  <Instagram
                    onClick={() => window.open('https://www.instagram.com/aengun_/', '_blank')}
                  />
                  <GitHub onClick={() => window.open('https://github.com/aengun', '_blank')} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item style={{ display: 'flex' }}>
                  <Typography variant="h6">박영운</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }}>
                  <Typography variant="body1">직책 : 찌질이</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }}>
                  <Instagram
                    onClick={() => window.open('https://instagram.com/_youngwoon/', '_blank')}
                  />
                  <GitHub onClick={() => window.open('https://github.com/youngpark17', '_blank')} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Grid container direction="column">
                <Grid item style={{ display: 'flex' }}>
                  <Typography variant="h6">이주형</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }}>
                  <Typography variant="body1">직책 : 찌질이</Typography>
                </Grid>
                <Grid item style={{ display: 'flex' }}>
                  <Instagram
                    onClick={() => window.open('https://instagram.com/joooooooohy/', '_blank')}
                  />
                  <GitHub onClick={() => window.open('https://github.com/junam2', '_blank')} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">© 2021 All Rights Reserved</Typography>
      </Grid>
      <Grid item>
        <TableContainer>
          <Table style={{ minWidth: 650 }} aria-label="simple table"></Table>
        </TableContainer>
      </Grid>
    </div>
  );
}
