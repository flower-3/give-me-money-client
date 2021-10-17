import { DialogContent, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { GrantInfo } from './Modal';

type ModalContentProps = {
  info?: GrantInfo;
};

export default function ModalContent({ info }: ModalContentProps) {
  return (
    <DialogContent dividers>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                label="서비스명"
                value={info?.서비스명}
                disabled
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="문의처전화번호"
                value={info?.문의처전화번호 ? info?.문의처전화번호 : ' '}
                disabled
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="구비서류"
            value={info?.구비서류 ? info?.구비서류 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={2}
          />
        </Grid>
        <Grid item>
          <TextField
            label="법령"
            value={info?.법령 ? info?.법령 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="서비스목적"
            value={info?.서비스목적 ? info?.서비스목적 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={2}
          />
        </Grid>
        <Grid item>
          <TextField
            label="선정기준"
            value={info?.선정기준 ? info?.선정기준 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={5}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                label="소관기관명"
                value={info?.소관기관명 ? info?.소관기관명 : ' '}
                disabled
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="신청기한"
                value={info?.신청기한 ? info?.신청기한 : ' '}
                disabled
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="신청방법"
            value={info?.신청방법 ? info?.신청방법 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            label="자치법규"
            value={info?.자치법규 ? info?.자치법규 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                label="접수기관명"
                value={info?.접수기관명 ? info?.접수기관명 : ' '}
                disabled
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="지원유형"
                value={info?.지원유형 ? info?.지원유형 : ' '}
                disabled
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            label="지원내용"
            value={info?.지원내용 ? info?.지원내용 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item>
          <TextField
            label="지원대상"
            value={info?.지원대상 ? info?.지원대상 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item>
          <TextField
            label="행정규칙"
            value={info?.행정규칙 ? info?.행정규칙 : ' '}
            disabled
            variant="outlined"
            size="small"
            fullWidth
          />
        </Grid>
      </Grid>
    </DialogContent>
  );
}
