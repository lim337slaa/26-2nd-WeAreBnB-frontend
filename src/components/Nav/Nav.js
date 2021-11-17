import React, { useState } from 'react';
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
    <Navigation>
      <GiMushroomHouse className="logo" />
      <Logo>WeAre BnB</Logo>

      <HostContainer>
        <Host>호스트 되기</Host>
        <GrLanguage className="language" />
        <Login type="button" onClick={isLogined}>
          <VscThreeBars className="bars" />
          <FaUserCircle className="person" />
        </Login>
        {whichIsClickedLogin ? <LoginPop /> : null}
      </HostContainer>

      {isClickedNav ? (
        <ActivatedNav />
      ) : (
        <TopContainer>
          <SearchBarContainer>
            <SearchBar
              type="button"
              onClick={() => setIsClickedNav(!isClickedNav)}
            >
              <SearchStart type="button">
                <LocationText>검색 시작하기</LocationText>
              </SearchStart>
              <PersonNum type="button">
                <SearchZoom type="button">
                  <FaSearch className="search" />
                </SearchZoom>
              </PersonNum>
            </SearchBar>
          </SearchBarContainer>
        </TopContainer>
      )}
    </Navigation>
  );
}

export default Nav;

const Navigation = styled.nav`
  position: sticky;
  top: 0;
  max-width: 1440px;
  background-color: white;
  height: 93px;
  padding: 20px 40px 0px 30px;

  .logo {
    position: relative;
    left: 35px;
    font-size: 50px;
    color: #ff385c;
  }
`;

const Logo = styled.span`
  position: absolute;
  left: 125px;
  top: 40px;
  font-size: 20px;
  font-weight: 900;
  color: #ff385c;
`;

const TopContainer = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
`;

const SearchBarContainer = styled.span`
  position: absolute;
  left: 550px;
  bottom: 20px;
`;

const HostContainer = styled.span`
  position: relative;
  left: 1040px;
  bottom: 20px;
  font-size: 15px;

  .language {
    margin: 0px 25px 0px 10px;
  }
`;

const Host = styled.span`
  margin: 0px 12px 0px 10px;
`;
const Login = styled.button`
  position: relative;
  bottom: 7px;
  width: 80px;
  height: 45px;
  border-radius: 20px;
  border-color: #ebebeb;
  background-color: white;
  cursor: pointer;

  .bars {
    position: absolute;
    top: 10px;
    right: 45px;
    font-size: 18px;
  }

  .person {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 30px;
    color: gray;
  }
`;

const SearchBar = styled.div`
  display: flex;
  width: 310px;
  height: 50px;
  margin-right: 260px;
  border-radius: 40px;
  background-color: white;
  font-size: 15px;
  border: 1px solid #ebebeb;
`;

const SearchStart = styled.div`
  width: 260px;
  height: 30px;
  padding: 20px 0px 0px 30px;
  background-color: white;
  border: none;
  border-color: #ebebeb;
  font-size: 13px;
  cursor: pointer;
`;

const LocationText = styled.span`
  font-size: 14px;
`;

const PersonNum = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  padding: 20px 0px 0px 20px;
  border: none;
  border-color: #ebebeb;
  font-size: 13px;
  background-color: white;
  cursor: pointer;

  .search {
    margin: 10px 30px 0px 10px;
    color: white;
  }
`;

const SearchZoom = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 32px;
  height: 32px;
  background-color: red;
  border-radius: 30px;
  border-color: #ebebeb;
  cursor: pointer;
`;
