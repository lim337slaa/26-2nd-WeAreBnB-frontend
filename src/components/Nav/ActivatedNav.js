import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Person from './Person';
import { FaSearch } from 'react-icons/fa';
import { BsDashLg } from 'react-icons/bs';

function SearchNav() {
  const [whichIsClicked, setWhichIsClicked] = useState('');
  const [personCardData, setPersonCardData] = useState([]);
  const [searchLocation, setSerchLocation] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [personNum, setPersonNum] = useState(0);
  const [childNum, setChildNum] = useState(0);
  const [searchBtnDisabled, setSearchBtnDisabled] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('data/PersonData.json')
      .then(res => res.json())
      .then(data => {
        setPersonCardData(data);
      });
  }, []);

  const goToListPage = () => {
    if (!searchLocation) {
      alert('장소를 입력해주세요');
      return;
    } else if (!checkInDate) {
      alert('체크인 날짜를 입력해주세요');
      return;
    } else if (!checkOutDate) {
      alert('체크아웃 날짜를 입력해주세요');
      return;
    } else if (!personNum + childNum) {
      alert('인원을 선택해주세요');
      return;
    }

    setWhichIsClicked('ㅇ');

    navigate(
      `rooms?location=${searchLocation}&check_in=${checkInDate}&check_out=${checkOutDate}&guest=${
        personNum + childNum
      }`
    );
  };

  const userSelectThis = buttonName => {
    setWhichIsClicked(buttonName);
  };

  const plusPersonNumber = title => {
    if (title === '성인') {
      setPersonNum(personNum + 1);
    } else if (title === '어린이') {
      setChildNum(childNum + 1);
    }
  };

  const minusPersonNumber = title => {
    if (title === '성인') {
      setPersonNum(personNum - 1);
    } else if (title === '어린이') {
      setChildNum(childNum - 1);
    }
  };

  const changeLocationInput = e => {
    if (e.target.name === 'location') {
      setSerchLocation(e.target.value);
    } else if (e.target.name === 'checkIn') {
      setCheckInDate(e.target.value);
    } else if (e.target.name === 'checkOut') {
      setCheckOutDate(e.target.value);
    }
  };

  return (
    <Navigation>
      <Room>
        숙소
        <BsDashLg className="underbar" />
      </Room>
      <SearchBarContainer>
        <SearchBar type="button">
          <Location
            whichIsClicked={whichIsClicked}
            onClick={() => userSelectThis('location')}
          >
            <LocationDiv>
              <LocationText>위치</LocationText>
              <LocationInput
                placeholder="어디로 여행가세요?"
                value={searchLocation}
                onChange={changeLocationInput}
                name="location"
              />
            </LocationDiv>
          </Location>
          <CheckIn
            whichIsClicked={whichIsClicked}
            onClick={() => userSelectThis('checkIn')}
          >
            <CheckInDiv>
              <CheckInText>체크인</CheckInText>
              <CheckInInput
                placeholder="날짜입력"
                value={checkInDate}
                onChange={changeLocationInput}
                name="checkIn"
              />
            </CheckInDiv>
          </CheckIn>
          <CheckOut
            whichIsClicked={whichIsClicked}
            onClick={() => userSelectThis('checkOut')}
          >
            <CheckOutDiv>
              <CheckOutText>체크아웃</CheckOutText>
              <CheckOutInput
                placeholder="날짜 입력"
                value={checkOutDate}
                onChange={changeLocationInput}
                name="checkOut"
              />
            </CheckOutDiv>
          </CheckOut>

          <PersonNum whichIsClicked={whichIsClicked}>
            <PersonDiv onClick={() => userSelectThis('personNum')}>
              <PersonText>인원</PersonText>
              <PersonInput>
                {personNum + childNum > 0
                  ? `게스트 ${personNum + childNum}명`
                  : '게스트 추가'}
              </PersonInput>
            </PersonDiv>
            <MapContainer>
              {whichIsClicked === 'personNum' &&
                personCardData.map(card => {
                  return (
                    <Person
                      key={card.id}
                      id={card.id}
                      title={card.title}
                      subtitle={card.subTitle}
                      backgroundcolor={card.backgroundcolor}
                      personNum={personNum}
                      childNum={childNum}
                      plusPersonNumber={plusPersonNumber}
                      minusPersonNumber={minusPersonNumber}
                    />
                  );
                })}
            </MapContainer>
            <SearchZoom
              type="button"
              onClick={goToListPage}
              disabled={searchBtnDisabled}
            >
              <FaSearch className="search" />
            </SearchZoom>
          </PersonNum>
        </SearchBar>
      </SearchBarContainer>
    </Navigation>
  );
}

export default SearchNav;

const Navigation = styled.nav`
  position: relative;
  max-width: 1440px;
  height: 180px;
  padding: 20px 40px 0px 30px;
  background-color: white;

  .logo {
    position: relative;
    left: 35px;
    font-size: 50px;
    color: #ff385c;
  }

  .language {
    margin-top: 17px;
  }
`;

const Room = styled.span`
  position: relative;
  left: 600px;
  bottom: 73px;
  font-size: 17px;

  .underbar {
    position: absolute;
    top: 19px;
    left: 6px;
  }
`;

const SearchBarContainer = styled.div`
  position: relative;
`;

const SearchBar = styled.div`
  display: flex;
  margin-left: 273px;
  width: 840px;
  height: 73px;
  border-radius: 40px;
  border-color: #ebebeb;
  border: 1px solid #ebebeb;
  background-color: #f9f9f9;
  font-size: 15px;

  .partition {
    height: 70px;
  }
`;

const LocationDiv = styled.div`
  position: relative;
  bottom: 0px;
  height: 30px;
  border-right: 1px solid;
  border-color: lightgray;
`;
const LocationText = styled.span`
  position: absolute;
  bottom: 17px;
  left: 2px;
  font-size: 12px;
  font-weight: bold;
`;
const LocationInput = styled.input`
  position: absolute;
  width: 180px;
  height: 40px;
  font-size: 14px;
  color: gray;
  border-style: none;
  background: none;
`;
const CheckInDiv = styled.div`
  position: relative;
  bottom: 10px;
  height: 30px;
  border-right: 1px solid;
  border-color: lightgray;
`;

const CheckInText = styled.span`
  position: absolute;
  bottom: 17px;
  left: 2px;
  font-size: 12px;
  font-weight: bold;
`;

const CheckInInput = styled.input`
  position: absolute;
  bottom: 0px;
  left: 2px;
  padding: 0px 6px 0px 0px;
  font-size: 13px;
  font-weight: bold;
  color: gray;
  border-style: none;
  background: none;
`;

const CheckOutDiv = styled.div`
  position: relative;
  bottom: 10px;
  height: 30px;
  border-right: 1px solid;
  border-color: lightgray;
`;

const CheckOutText = styled.span`
  position: absolute;
  bottom: 17px;
  left: 2px;
  font-size: 12px;
  font-weight: bold;
`;

const CheckOutInput = styled.input`
  position: absolute;
  bottom: 0px;
  left: 2px;
  padding: 0px 6px 0px 0px;
  font-size: 13px;
  font-weight: bold;
  color: gray;
  border-style: none;
  background: none;
`;

const PersonDiv = styled.div`
  position: relative;
`;

const MapContainer = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
`;

const PersonText = styled.span`
  position: absolute;
  bottom: 12px;
  left: 2px;
  font-size: 12px;
  font-weight: bold;
`;

const PersonInput = styled.span`
  position: absolute;
  left: 2px;
  bottom: -5px;
  font-size: 14px;
  color: gray;
`;

const Location = styled.div`
  width: 270px;
  height: 70px;
  padding: 20px 0px 0px 30px;
  border: none;
  border-radius: 40px;
  border-color: #ebebeb;
  font-size: 13px;
  background-color: ${props =>
    props.whichIsClicked === 'location' ? '#fff' : '#f9f9f9'};
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
  }
  box-shadow: ${props =>
    props.whichIsClicked === 'location' ? '6px 8px 25px 0px lightgray;' : null};
`;
const CheckIn = styled.button`
  width: 180px;
  height: 70px;
  padding: 20px 0px 0px 20px;
  border: none;
  border-radius: 40px;
  font-size: 13px;
  background-color: ${props =>
    props.whichIsClicked === 'checkIn' ? '#fff' : '#f9f9f9'};
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
  }
  box-shadow: ${props =>
    props.whichIsClicked === 'checkIn' ? '6px 8px 20px 0px lightgray;' : null};
`;

const CheckOut = styled.button`
  width: 180px;
  height: 70px;
  padding: 20px 0px 0px 20px;
  border: none;
  border-radius: 40px;
  border-color: #ebebeb;
  font-size: 13px;
  background-color: ${props =>
    props.whichIsClicked === 'checkOut' ? '#fff' : '#f9f9f9'};
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
  }
  box-shadow: ${props =>
    props.whichIsClicked === 'checkOut' ? '6px 8px 20px 0px lightgray;' : null};
`;

const PersonNum = styled.button`
  position: relative;
  width: 210px;
  height: 70px;
  padding: 20px 0px 0px 20px;
  border: none;
  border-radius: 40px;
  border-color: #ebebeb;
  font-size: 13px;
  background-color: ${props =>
    props.whichIsClicked === 'personNum' ? '#fff' : '#f9f9f9'};
  cursor: pointer;
  &:hover {
    background-color: #e2e2e2;
  }
  box-shadow: ${props =>
    props.whichIsClicked === 'personNum'
      ? '6px 8px 20px 0px lightgray;'
      : null};

  .search {
    margin: 17px 14px 0px 17px;
    color: white;
    font-size: 17px;
  }
`;

const SearchZoom = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 50px;
  border-color: #ebebeb;
  z-index: 10;

  &:hover {
    background-color: #d24c7f;
  }
`;
