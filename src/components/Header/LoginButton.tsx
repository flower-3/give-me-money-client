import React from 'react';
import loginImage from '../../resources/images/kakao_login.png';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {
  visibility: any;
};

const useStyles = makeStyles<Theme, Props>(
  createStyles({
    logginButton: {
      visibility: ({ visibility }) => visibility,
    },
  }),
);
const authenticateKakaoUser = (): void => {
  //개발서버
  location.href =
    'https://kauth.kakao.com/oauth/authorize?client_id=0b19f85eee82ee6d30e24d4516cfb359&redirect_uri=http://34.83.199.174:8080/api/v1/auth/kakao/callback&response_type=code';

  /*
   로컬
  location.href =
    'https://kauth.kakao.com/oauth/authorize?client_id=0b19f85eee82ee6d30e24d4516cfb359&redirect_uri=http://127.0.0.1:8080/api/v1/auth/kakao/callback&response_type=code';
  */
};

const ifBearExists = (): boolean => {
  if (document.cookie.toString().indexOf('Bearer') > 0) {
    return false;
  }
  return true;
};
export default function LoginButton() {
  const props: Props = { visibility: ifBearExists() ? 'hidden' : 'visible' };
  const styles = useStyles(props);
  return (
    <div className={styles.logginButton}>
      <img src={loginImage} onClick={() => authenticateKakaoUser()} />
    </div>
  );
}
