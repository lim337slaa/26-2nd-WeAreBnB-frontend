import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import LoginKakao from './components/LoginKakao';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const modalRef = useRef();

  const closeModal = e => {
    const condition = modalRef.current.contains(e.target);

    if (!condition) {
      setIsLogin(false);
    }
  };

  return (
    <LoginModal onClick={closeModal} isLogin={isLogin}>
      <UserLogin ref={modalRef}>
        <LoginTitle>로그인 또는 회원가입</LoginTitle>
        <LoginWrapper>
          <WelcomHome>에어비앤비에 오신 것을 환영합니다.</WelcomHome>
          <LoginInput>
            <LoginEmail
              type="text"
              placeholder="이메일을 입력하세요."
              name="idInput"
            />
            <LoginPwd
              type="password"
              placeholder="비밀번호를 입력하세요."
              name="pwdInput"
            />
            <LoginText>
              전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
              데이터 요금이 부과됩니다. <TextDeco>개인정보 처리방침</TextDeco>
            </LoginText>
            <LoginBtn type="submit">계속</LoginBtn>
          </LoginInput>
        </LoginWrapper>
        <LoginEnd>
          <Text>또는</Text>
        </LoginEnd>
        <SocialLogin>
          <LoginKakao />
        </SocialLogin>
      </UserLogin>
    </LoginModal>
  );
}

const LoginModal = styled.article`
  display: ${props => (props.isLogin ? 'block' : 'none')};
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

const UserLogin = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

const LoginTitle = styled.header`
  padding: 1rem 0;
  text-align: center;
  color: black;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

const LoginWrapper = styled.section`
  padding: 2rem;
`;

const WelcomHome = styled.h4`
  font-size: 1.4rem;
  color: black;
`;

const LoginInput = styled.form`
  padding: 2rem 0 0;
`;

const LoginEmail = styled.input`
  padding: 20px;
  width: 100%;
  border: 1px solid #b0b0b0;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
`;

const LoginPwd = styled.input`
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #b0b0b0;
  border-radius: 0 0 8px 8px;
`;

const LoginText = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 15px;
  color: black;
`;

const TextDeco = styled.span`
  font-weight: bold;
  text-decoration: underline;
`;

const LoginBtn = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #ff385c;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #dd1162;
  }
`;

const LoginEnd = styled.div`
  position: relative;
  &::before {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    width: 85%;
    height: 1px;
    background-color: #ddd;
  }
`;

const Text = styled.p`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  background-color: white;
  font-size: 12px;
  text-align: center;
  color: #b0b0b0;
  z-index: 99;
`;

const SocialLogin = styled.section`
  padding: 2rem;
`;

export default Login;
