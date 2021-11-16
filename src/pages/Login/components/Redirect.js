import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../config';
import { REDIRECT_URI } from './Oauth';

const Redirect = () => {
  let accessCode = new URL(window.location.href).searchParams.get('code');
  const navigation = useNavigate();
  let accessToken;

  const bodyData = {
    grant_type: 'authorization_code',
    client_id: process.env.REACT_APP_USER_TOKEN,
    redirect_uri: REDIRECT_URI,
    code: accessCode,
  };

  const queryStringBody = Object.keys(bodyData)
    .map(key => encodeURIComponent(key) + '=' + encodeURI(bodyData[key]))
    .join('&');

  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;',
        Accept: 'application/json',
      },
      body: queryStringBody,
    })
      .then(res => res.json())
      .then(result => {
        accessToken = result.access_token;
        accessToken &&
          fetch('http://10.58.1.56:8000/users/kakaologin', {
            headers: {
              Authorization: accessToken,
            },
          })
            .then(res => res.json())
            .then(
              result => localStorage.setItem('back_token', result.access_token),
              navigation('/')
            );
      });
  }, []);
  return <div>로그인 성공!</div>;
};
export default Redirect;
