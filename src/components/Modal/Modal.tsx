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

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  serviceId: string;
};

export default function Modal({ isModalOpen, serviceId, setIsModalOpen }: ModalProps) {
  /*========== state ==========*/
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
  }, [serviceId]);

  /*========== event handler ==========*/
  const handleClose = () => {
    const resetInfo: GrantServiceDetailModel = {
      SVC_ID: '',
      지원유형: '',
      서비스명: '',
      서비스목적: '',
      신청기한: '',
      지원대상: '',
      선정기준: '',
      지원내용: '',
      신청방법: '',
      구비서류: '',
      접수기관명: '',
      문의처전화번호: '',
      온라인신청사이트URL: '',
      수정일시: '',
      소관기관명: '',
      행정규칙: '',
      자치법규: '',
      법령: '',
    };
    setInfo(resetInfo);
    setIsModalOpen(false);
  };

  return (
    <div>
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
