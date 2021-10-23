import { TextField, TextFieldProps } from '@material-ui/core';
import React from 'react';

export default function ModalTextField(props: TextFieldProps) {
  return <TextField {...props} size="small" variant="outlined" fullWidth />;
}
