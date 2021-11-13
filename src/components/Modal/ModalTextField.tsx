import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      '& .MuiInputBase-input': {
        color: 'black',
      },
    },
  }),
);

export default function ModalTextField(props: TextFieldProps) {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      size="small"
      variant="outlined"
      fullWidth
      disabled
      className={classes.textField}
    />
  );
}
