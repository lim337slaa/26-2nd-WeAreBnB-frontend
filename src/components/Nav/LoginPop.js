import React from 'react';
import styled from 'styled-components';

function LoginPopUp() {
  return (
    <LoginPop>
      <Mypage>마이페이지</Mypage>
      <Logout>로그아웃</Logout>
    </LoginPop>
  );
}

export default LoginPopUp;

const LoginPop = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  width: 230px;
  height: 150px;
  border-radius: 45px;
  background-color: #f9f9f9;
  z-index: 9999;
`;

const Mypage = styled.button`
  position: absolute;
  width: 230px;
  height: 75px;
  border-radius: 45px;
  border-style: none;
  background-color: #f9f9f9;
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
  }
`;

const Logout = styled.button`
  position: absolute;
  top: 75px;
  width: 230px;
  height: 75px;
  border-radius: 45px;
  border-style: none;
  background-color: #f9f9f9;
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
  }
`;
