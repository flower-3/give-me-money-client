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

export interface GrantInfo {
  SVC_ID: string;
  구비서류: string;
  문의처전화번호: string;
  법령: string;
  서비스명: string;
  서비스목적: string;
  선정기준: string;
  소관기관명: string;
  수정일시: string;
  신청기한: string;
  신청방법: string;
  온라인신청사이트URL: string;
  자치법규: string;
  접수기관명: string;
  지원내용: string;
  지원대상: string;
  지원유형: string;
  행정규칙: string;
}

export default function Modal() {
  /*========== state ==========*/
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [serviceId, setServiceId] = useState<string>('000000465790'); // 테스트용 서비스 아이디
  const [info, setInfo] = useState<GrantInfo>();
  const [error, setError] = useState(null);

  /*========== style ==========*/
  const classes = useStyles();

  /*========== useEffect ==========*/
  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setError(null);
        const response: AxiosResponse = await axios.get(
          'http://34.83.199.174:8080/api/v1/gov24/v1/serviceDetail?serviceId=' + serviceId,
        );
        const responseData: any = response.data;
        setInfo(responseData.data.data[0]);
      } catch (e: any) {
        setError(e);
      }
    };
    fetchDetail();
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
