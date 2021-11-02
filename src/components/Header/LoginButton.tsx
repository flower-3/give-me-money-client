import React, { useEffect } from 'react';
import loginImage from '../../resources/images/kakao_login.png';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  visibility: any;
};

const useStyles = makeStyles<Theme, Props>((theme) =>
  createStyles({
    logginButton: {
      visibility: ({ visibility }) => visibility,
    },
  }),
);
const authenticateKakaoUser = (): void => {
  location.href =
    'https://kauth.kakao.com/oauth/authorize?client_id=0b19f85eee82ee6d30e24d4516cfb359&redirect_uri=http://34.83.199.174:8080/api/v1/auth/kakao/callback&response_type=code';
};
export default function LoginButton() {
  let isHidden = true;
  if (document.referrer === '') {
    isHidden = false;
  }
  const props: Props = { visibility: isHidden ? 'hidden' : 'visible' };
  const styles = useStyles(props);
  return (
    <div className={styles.logginButton}>
      <img src={loginImage} onClick={() => authenticateKakaoUser()} />
    </div>
  );
}
