import React, { useEffect } from 'react';
import styled from 'styled-components';

function ReservationPerson({
  maxGuest,
  countPerson,
  setCountPerson,
  countAdult,
  setCountAdult,
  countKid,
  setCountKid,
}) {
  const onClickAdultBtn = e => {
    if (e.target.value === 'minusBtn') {
      setCountAdult(countAdult - 1);
    } else if (e.target.value === 'plusBtn') {
      setCountAdult(countAdult + 1);
    }
  };

  const onClickKidBtn = e => {
    if (e.target.value === 'minusBtn') {
      setCountKid(countKid - 1);
    } else if (e.target.value === 'plusBtn') {
      setCountKid(countKid + 1);
    }
  };

  useEffect(() => {
    setCountPerson(countAdult + countKid);
  });

  return (
    <Wrapper>
      <OptionBox>
        <OptionText>
          <OptionTitle>성인</OptionTitle>
          <OptionSubTitle>만 13세 이상</OptionSubTitle>
        </OptionText>
        <OptionCount>
          <OptionAdultMinusBtn
            value="minusBtn"
            onClick={e => onClickAdultBtn(e)}
            disabled={countAdult <= 1 ? true : false}
            countAdult={countAdult}
          >
            -
          </OptionAdultMinusBtn>
          <OptionNumber>{countAdult}</OptionNumber>
          <OptionAdultPlusBtn
            value="plusBtn"
            onClick={e => onClickAdultBtn(e)}
            disabled={countPerson >= maxGuest ? true : false}
            countPerson={countPerson}
            maxGuest={maxGuest}
          >
            +
          </OptionAdultPlusBtn>
        </OptionCount>
      </OptionBox>

      <OptionBox>
        <OptionText>
          <OptionTitle>어린이 / 유아</OptionTitle>
          <OptionSubTitle>만 13세 미만</OptionSubTitle>
        </OptionText>
        <OptionCount>
          <OptionKidMinusBtn
            value="minusBtn"
            onClick={e => onClickKidBtn(e)}
            disabled={countKid <= 0 ? true : false}
            countKid={countKid}
          >
            -
          </OptionKidMinusBtn>
          <OptionNumber>{countKid}</OptionNumber>
          <OptionKidPlusBtn
            value="plusBtn"
            onClick={e => onClickKidBtn(e)}
            disabled={countPerson >= maxGuest ? true : false}
            countPerson={countPerson}
            maxGuest={maxGuest}
          >
            +
          </OptionKidPlusBtn>
        </OptionCount>
      </OptionBox>

      <OptionDetail>
        이 숙소의 최대 숙박 인원은 {maxGuest}명 (어린이/유아 포함)입니다.
        반려동물 동반은 허용되지 않습니다.
      </OptionDetail>
    </Wrapper>
  );
}

export default ReservationPerson;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 330px;
  top: 220px;
  padding: 16px;
  background-color: white;
  border: solid 1px;
  border-radius: 4px;
  font-size: 16px;
  z-index: 300;
`;

const OptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const OptionText = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionTitle = styled.div`
  margin-bottom: 8px;
`;

const OptionSubTitle = styled.div`
  font-size: 14px;
`;

const OptionCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
`;

const OptionAdultMinusBtn = styled.button`
  text-align: center;
  justify-content: center;
  padding-bottom: 2px;
  width: 30px;
  height: 30px;
  background-color: white;
  color: ${props => (props.countAdult <= 1 ? 'lightgray' : 'black')};
  border: 1px solid ${props => (props.countAdult <= 1 ? 'lightgray' : 'black')};
  border-radius: 15px;
  cursor: pointer;
`;

const OptionNumber = styled.div`
  margin: 5px 10px 0 10px;
  font-size: 16px;
`;

const OptionAdultPlusBtn = styled.button`
  text-align: center;
  justify-content: center;
  padding-bottom: 2px;
  width: 30px;
  height: 30px;
  background-color: white;
  color: ${props =>
    props.countPerson < props.maxGuest ? 'black' : 'lightgray'};
  border: 1px solid
    ${props => (props.countPerson < props.maxGuest ? 'black' : 'lightgray')};
  border-radius: 15px;
  cursor: pointer;
`;

const OptionKidMinusBtn = styled.button`
  text-align: center;
  justify-content: center;
  padding-bottom: 2px;
  width: 30px;
  height: 30px;
  background-color: white;
  color: ${props => (props.countKid <= 0 ? 'lightgray' : 'black')};
  border: 1px solid ${props => (props.countKid <= 0 ? 'lightgray' : 'black')};
  border-radius: 15px;
  cursor: pointer;
`;

const OptionKidPlusBtn = styled.button`
  text-align: center;
  justify-content: center;
  padding-bottom: 2px;
  width: 30px;
  height: 30px;
  background-color: white;
  color: ${props =>
    props.countPerson >= props.maxGuest ? 'lightgray' : 'black'};
  border: 1px solid
    ${props => (props.countPerson >= props.maxGuest ? 'lightgray' : 'black')};
  border-radius: 15px;
  cursor: pointer;
`;

const OptionDetail = styled.p`
  padding: 20px 0 10px 0;
  line-height: 17px;
  font-size: 13px;
`;
