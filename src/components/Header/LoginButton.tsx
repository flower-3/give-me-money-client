import React, { useEffect } from 'react';
import loginImage from '../../resources/images/kakao_login.png';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, Props>(
  createStyles({
    logginButton: {
      visibility: ({ isVisible }) => (isVisible ? 'visible' : 'hidden'),
    },
  }),
);

const setCookie = function (name: string, value: string, exp: number) {
  const date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  console.log(document.cookie);
};
const getCookie = function (name: string): string | null {
  const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value ? value[2] : null;
};
/*
 * 서버에서 내려주는 쿠키에 있는 Bearer 토큰의 경우 HttpOnly 이므로
 * 사용자의 세션을 체크할 수 있는 별도의 isLoggined 쿠키를 두어 로그인 체크
 **/
const setLocalStorageIfUserLoggined = (): void => {
  const URLSearch = new URLSearchParams(location.search);
  if (URLSearch.get('success') === '1' || getCookie('isLoggined') === '1') {
    setCookie('isLoggined', '1', 60 * 60 * 24);
  }
};

const authenticateKakaoUser = (): void => {
  localStorage.clear();
  //개발서버
  location.href =
    'https://kauth.kakao.com/oauth/authorize?client_id=0b19f85eee82ee6d30e24d4516cfb359&redirect_uri=http://34.83.199.174:8080/api/v1/auth/kakao/callback&response_type=code';
  // document.location.href =
  //   'https://kauth.kakao.com/oauth/authorize?client_id=0b19f85eee82ee6d30e24d4516cfb359&redirect_uri=http://127.0.0.1:8080/api/v1/auth/kakao/callback&response_type=code';
};

interface Props {
  isVisible: boolean;
}

export default function LoginButton() {
  setLocalStorageIfUserLoggined();
  const isVisible = getCookie('isLoggined') === '1' ? false : true;
  const styles = useStyles({ isVisible });
  return (
    <div className={styles.logginButton}>
      <img src={loginImage} onClick={() => authenticateKakaoUser()} />
    </div>
  );
}
