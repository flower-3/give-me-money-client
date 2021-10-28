import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ModalContent from './ModalContent';
import { getGrantServiceDetail } from '../../api/grant/getGrantService';
import { GrantServiceDetailModel } from '../../interface/Grant.Interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  }),
);

export default function Modal() {
  /*========== state ==========*/
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<string>('000000465790'); // 테스트용 서비스 아이디
  const [info, setInfo] = useState<GrantServiceDetailModel>();
  const [error, setError] = useState<unknown>();

  /*========== style ==========*/
  const classes = useStyles();

  /*========== useEffect ==========*/
  useEffect(() => {
    try {
      getGrantServiceDetail(serviceId).then((data) => {
        setInfo(data.response.data[0]);
      });
    } catch (e) {
      setError(e);
      alert('getGrantServiceDetail error message: ' + error);
    }
  }, []);

  /*========== event handler ==========*/
  const handleClickOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* 모달 테스트용 버튼, 추후 삭제 예정 */}
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open modal
      </Button>
      <Dialog open={isModalOpen} onClose={handleClose} maxWidth={'sm'} fullWidth>
        <DialogTitle>
          <Typography variant="h6">보조금 정보 상세</Typography>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <ModalContent info={info} />
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            닫기
          </Button>
          <Button
            onClick={() => window.open(info?.온라인신청사이트URL)}
            color="primary"
            variant="contained"
            autoFocus
          >
            신청하러 가기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
