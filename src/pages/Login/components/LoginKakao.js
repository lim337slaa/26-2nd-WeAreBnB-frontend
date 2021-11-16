import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './Oauth';

export default function LoginKakao() {
  return (
    <GoToKakao>
      <KakaoBtn href={KAKAO_AUTH_URL} id="custom-login-btn">
        Kakao로 로그인하기
      </KakaoBtn>
    </GoToKakao>
  );
}

const GoToKakao = styled.button`
  width: 100%;
  background-color: #ffe500;
  font-size: 1rem;
  text-align: center;
  border: none;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #e0cd21;
  }
`;

const KakaoBtn = styled.a`
  display: block;
  padding: 10px;
  color: #181600;
  text-decoration: none;
`;
