import { DialogContent, Grid, TextField } from '@material-ui/core';
import React from 'react';
import { GrantServiceDetailModel } from '../../interface/Grant.Interface';
import ModalTextField from './ModalTextField';

type ModalContentProps = {
  info?: GrantServiceDetailModel;
};

export default function ModalContent({ info }: ModalContentProps) {
  const checkDataUndefined = (data: string | undefined) => {
    if (typeof data == 'undefined' || data === null) return ' ';
    else return data;
  };

  return (
    <DialogContent dividers>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <ModalTextField label="서비스명" value={checkDataUndefined(info?.서비스명)} />
            </Grid>
            <Grid item xs={6}>
              <ModalTextField
                label="문의처전화번호"
                value={checkDataUndefined(info?.문의처전화번호)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ModalTextField
            label="구비서류"
            value={checkDataUndefined(info?.구비서류)}
            multiline
            rows={2}
          />
        </Grid>
        <Grid item>
          <ModalTextField label="법령" value={checkDataUndefined(info?.법령)} />
        </Grid>
        <Grid item>
          <ModalTextField
            label="서비스목적"
            value={checkDataUndefined(info?.서비스목적)}
            multiline
            rows={2}
          />
        </Grid>
        <Grid item>
          <ModalTextField
            label="선정기준"
            value={checkDataUndefined(info?.선정기준)}
            multiline
            rows={5}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <ModalTextField label="소관기관명" value={checkDataUndefined(info?.소관기관명)} />
            </Grid>
            <Grid item xs={6}>
              <ModalTextField label="신청기한" value={checkDataUndefined(info?.신청기한)} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ModalTextField label="신청방법" value={checkDataUndefined(info?.신청방법)} />
        </Grid>
        <Grid item>
          <ModalTextField label="자치법규" value={checkDataUndefined(info?.자치법규)} />
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <ModalTextField label="접수기관명" value={checkDataUndefined(info?.접수기관명)} />
            </Grid>
            <Grid item xs={6}>
              <ModalTextField label="지원유형" value={checkDataUndefined(info?.지원유형)} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ModalTextField
            label="지원내용"
            value={checkDataUndefined(info?.지원내용)}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item>
          <ModalTextField
            label="지원대상"
            value={checkDataUndefined(info?.지원대상)}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item>
          <ModalTextField label="행정규칙" value={checkDataUndefined(info?.행정규칙)} />
        </Grid>
      </Grid>
    </DialogContent>
  );
}
