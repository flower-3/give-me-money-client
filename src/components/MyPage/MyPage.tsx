import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid gray',
      width: '80%',
      height: '100%',
      borderRadius: '10px',
      display: 'flex',
    },
  }),
);

export default function MyPage() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      birthDay: '',
      birthMonth: '',
      birthyear: '',
      email: '',
      gender: 0,
      hasMultiChildren: '',
      isFarmer: '',
      isPregnant: '',
      isSick: '',
      isWorker: '',
      medianIncome: '', //??
      name: '',
      // password: '',
      phoneNumber: '',
      provider: '', //??
    },
    validationSchema: yup.object().shape({
      birthDay: yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
      // let data = values;
      // const birthday = values.birthMonth + values.birthDay;
      // data = { ...data, birthday: birthday };
      // console.log(data);
    },
    validateOnChange: false,
  });

  const onClickCancle = () => {
    console.log('cancle');
  };

  const gender = [
    { label: '남자', value: 1 },
    { label: '여자', value: 0 },
  ];

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item>
        <Typography variant="h5">마이 페이지</Typography>
      </Grid>
      <Grid item>
        <form onSubmit={formik.handleSubmit}>
          <Paper>
            <Grid item container>
              <Typography variant="h6">이름</Typography>
              <TextField
                size="small"
                variant="outlined"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item container>
              <Typography variant="h6">휴대폰 번호</Typography>
              <TextField
                size="small"
                variant="outlined"
                name="phoneNumber"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item container>
              <Typography variant="h6">생년월일</Typography>
              <TextField
                size="small"
                variant="outlined"
                name="birthyear"
                value={formik.values.birthyear}
                onChange={formik.handleChange}
              />
              <Typography variant="h6">년</Typography>
              <TextField
                size="small"
                variant="outlined"
                name="birthMonth"
                value={formik.values.birthMonth}
                onChange={formik.handleChange}
              />
              <Typography variant="h6">월</Typography>
              <TextField
                size="small"
                variant="outlined"
                name="birthDay"
                value={formik.values.birthDay}
                onChange={formik.handleChange}
              />
              <Typography variant="h6">일</Typography>
            </Grid>
            <Grid item container>
              <Typography variant="h6">이메일</Typography>
              <TextField
                size="small"
                variant="outlined"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </Grid>
            <Grid item container>
              <Typography variant="h6">성별</Typography>
              <FormControl error={Boolean(formik.errors.gender)}>
                <RadioGroup
                  aria-label={'gender'}
                  name={'gender'}
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  row
                >
                  <FormControlLabel control={<Radio value={1} />} label="남자" />
                  <FormControlLabel control={<Radio value={0} />} label="여자" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item container>
              <Typography variant="h6">다자녀 여부 *</Typography>
              <FormControl error={Boolean(formik.errors.hasMultiChildren)}>
                <RadioGroup
                  aria-label={'hasMultiChildren'}
                  name={'hasMultiChildren'}
                  value={formik.values.hasMultiChildren}
                  onChange={formik.handleChange}
                  row
                >
                  <FormControlLabel control={<Radio color="primary" value={1} />} label="예" />
                  <FormControlLabel control={<Radio color="primary" value={0} />} label="아니오" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item container>
              <Typography variant="h6">농업 종사자 *</Typography>
              <FormControl error={Boolean(formik.errors.isFarmer)}>
                <RadioGroup
                  aria-label={'isFarmer'}
                  name={'isFarmer'}
                  value={formik.values.isFarmer}
                  onChange={formik.handleChange}
                  row
                >
                  <FormControlLabel control={<Radio color="primary" value={1} />} label="예" />
                  <FormControlLabel control={<Radio color="primary" value={0} />} label="아니오" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item container>
              <Typography variant="h6">임신 여부 *</Typography>
              <FormControl error={Boolean(formik.errors.isPregnant)}>
                <RadioGroup
                  aria-label={'isPregnant'}
                  name={'isPregnant'}
                  value={formik.values.isPregnant}
                  onChange={formik.handleChange}
                  row
                >
                  <FormControlLabel control={<Radio color="primary" value={1} />} label="예" />
                  <FormControlLabel control={<Radio color="primary" value={0} />} label="아니오" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item container>
              <Typography variant="h6">질환 여부 *</Typography>
              <FormControl error={Boolean(formik.errors.isSick)}>
                <RadioGroup
                  aria-label={'isSick'}
                  name={'isSick'}
                  value={formik.values.isSick}
                  onChange={formik.handleChange}
                  row
                >
                  <FormControlLabel control={<Radio color="primary" value={1} />} label="예" />
                  <FormControlLabel control={<Radio color="primary" value={0} />} label="아니오" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item container>
              <Typography variant="h6">근로 여부 *</Typography>
              <FormControl error={Boolean(formik.errors.isWorker)}>
                <RadioGroup
                  aria-label={'isWorker'}
                  name={'isWorker'}
                  value={formik.values.isWorker}
                  onChange={formik.handleChange}
                  row
                >
                  <FormControlLabel control={<Radio color="primary" value={1} />} label="예" />
                  <FormControlLabel control={<Radio color="primary" value={0} />} label="아니오" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item container>
              <Typography variant="h6">중위소득 ??</Typography>
            </Grid>

            <Button color="primary" variant="outlined" onClick={onClickCancle}>
              취소
            </Button>
            <Button color="primary" variant="contained" type="submit">
              저장
            </Button>
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
}
