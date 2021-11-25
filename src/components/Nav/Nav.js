import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ActivatedNav from './ActivatedNav';
import LoginPop from './LoginPop';
import { useNavigate } from 'react-router-dom';

import { GiMushroomHouse } from 'react-icons/gi';
import { FaUserCircle, FaSearch } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { VscThreeBars } from 'react-icons/vsc';

function Nav() {
  const [isClickedNav, setIsClickedNav] = useState(false);
  const [whichIsClickedLogin, setWhichIsClickedLogin] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  const isLogined = () => {
    //
    if (localStorage.getItem('back_token')) {
      setWhichIsClickedLogin(!whichIsClickedLogin);
    } else {
      navigate('/login');
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <Navigation style={{ height: isClickedNav ? 190 : 120 }}>
      <NavWrapper>
        <LogoWrapper onClick={() => navigate('/')}>
          <GiMushroomHouse className="logo" size="40" />
          <Logo>WeAreBnB</Logo>
        </LogoWrapper>

        {isClickedNav ? (
          <ActivatedNav
            setIsClickedNav={setIsClickedNav}
            isClickedNav={isClickedNav}
          />
        ) : (
          <TopContainer
            type="button"
            onClick={() => setIsClickedNav(!isClickedNav)}
          >
            <LocationText>
              <p className="text">검색 시작하기</p>
            </LocationText>
            <SearchZoom type="button">
              <FaSearch className="search" />
            </SearchZoom>
          </TopContainer>
        )}
        <HostContainer>
          <Host>호스트 되기</Host>
          <GrLanguage className="language" />
          <Login type="button" onClick={isLogined}>
            <VscThreeBars className="bars" />
            <FaUserCircle className="person" />
          </Login>
          {whichIsClickedLogin ? <LoginPop /> : null}
        </HostContainer>
      </NavWrapper>
    </Navigation>
  );
}

export default Nav;

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  padding: 2rem 0;
  width: 100%;
  background-color: white;
  box-shadow: 3px 3px 15px #eee;
  z-index: 97;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
  font-size: 20px;
  font-weight: 900;
  color: #ff385c;
`;

const LogoWrapper = styled.div`
  display: flex;
  cursor: pointer;

  .logo {
    margin-right: 1rem;
  }
`;

const Logo = styled.p`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 900;
  color: #ff385c;
`;

const TopContainer = styled.div`
  position: relative;
  width: 300px;
  border-radius: 50px;
  border: 1px solid #ebebeb;
  box-shadow: 5px 5px 10px #ddd;
  cursor: pointer;
`;

const LocationText = styled.div`
  position: relative;
  left: 30px;
  padding: 1rem 0;
  width: 100px;
  font-size: 15px;
  .text {
  }
`;

const SearchZoom = styled.div`
  position: absolute;
  right: 5px;
  top: 3px;
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 100%;
  border-color: #ebebeb;

  .search {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

const HostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 230px;
  height: 50px;

  .language {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Host = styled.p`
  font-size: 16px;
  padding: 20px 0 0 0px;
  color: #333;
  font-weight: normal;
`;

const Login = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 80px;
  height: 45px;
  border-radius: 20px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;

  .bars {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 20px;
  }

  .person {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 30px;
    color: gray;
  }
`;
