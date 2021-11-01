import React from 'react';
import loginImage from '../../resources/images/kakao_login.png';

const authenticateKakaoUser = (): void => {
  location.href =
    'https://kauth.kakao.com/oauth/authorize?client_id=0b19f85eee82ee6d30e24d4516cfb359&redirect_uri=http://34.83.199.174:8080/api/v1/auth/kakao/callback&response_type=code';
};

export default function LoginButton() {
  return (
    <div>
      <img src={loginImage} onClick={() => authenticateKakaoUser()} />
    </div>
  );
}
