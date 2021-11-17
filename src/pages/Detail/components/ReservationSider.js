import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';
import ReservationDate from './ReservationDate';
import ReservationPerson from './ReservationPerson';

function DetailSider({ price, maxGuest, roomDate, id }) {
  const [actDate, setActDate] = useState(false);
  const [actPerson, setActPerson] = useState(false);
  const [actReservation, setActReservation] = useState(false);
  const [days, setDays] = useState(0);
  const [countPerson, setCountPerson] = useState(1);
  const [countAdult, setCountAdult] = useState(1);
  const [countKid, setCountKid] = useState(0);
  const [checkInDate, setCheckInDate] = useState('날짜 추가');
  const [checkOutDate, setCheckOutDate] = useState('날짜 추가');

  const navigate = useNavigate();

  const stayPrice = price * days;
  const serviceFees = stayPrice * 0.05;
  const bookFees = serviceFees * 0.1;
  const totalPrice = stayPrice + serviceFees + bookFees;

  const addPriceComma = price => {
    return Math.floor(price).toLocaleString('ko-KR');
  };

  const handleClickDate = () => {
    setActDate(!actDate);
  };

  const handleClickPerson = () => {
    setActPerson(!actPerson);
  };

  const handleClickReservation = e => {
    setActReservation(!actReservation);
    navigate('/mypage');

    const formData = new FormData();
    formData.append('room', id);
    formData.append('check_in', checkInDate);
    formData.append('check_out', checkOutDate);
    formData.append('adult', countAdult);
    formData.append('children', countKid);

    /* post 작업중 */
    fetch('/data/detailData.json', {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('back_token'),
      },
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('완룡');
          navigate('/mypage');
        } else {
          alert('제대로입력하세요');
        }
      });
  };

  return (
    <Wrapper>
      <SiderContent>
        <SiderTitle>
          요금을 확인하려면 날짜를
          <br />
          입력하세요.
        </SiderTitle>
        <SiderForm>
          <FormDate onClick={handleClickDate}>
            <FormCheckIn>
              {checkInDate}
              <FormTitle>체크인</FormTitle>
            </FormCheckIn>
            <FormCheckOut>
              {checkOutDate}
              <FormTitle>체크아웃</FormTitle>
            </FormCheckOut>
          </FormDate>
          <FormPerson onClick={handleClickPerson}>
            게스트 {countPerson}명<FormTitle>인원</FormTitle>
            <FiChevronDown className="iconDown" />
          </FormPerson>
        </SiderForm>
        <SiderBtn onClick={handleClickReservation}>예약 하기</SiderBtn>
        <SiderSelect>
          <SiderSelectText>
            예약 확정 전에는 요금이 청구되지 않습니다.
          </SiderSelectText>
          <AddList>
            <AddListTitle>
              ₩{addPriceComma(price)} x {days}박
            </AddListTitle>
            <AddListPrice>₩{addPriceComma(stayPrice)}</AddListPrice>
          </AddList>
          <AddList>
            <AddListTitle>서비스 수수료</AddListTitle>
            <AddListPrice>₩{addPriceComma(serviceFees)}</AddListPrice>
          </AddList>
          <AddList>
            <AddListTitle>숙박세와 수수료</AddListTitle>
            <AddListPrice>₩{addPriceComma(bookFees)}</AddListPrice>
          </AddList>
          <AddSum>
            <AddSumTitle>총 합계</AddSumTitle>
            <AddSumPrice>₩{addPriceComma(totalPrice)}</AddSumPrice>
          </AddSum>
        </SiderSelect>
      </SiderContent>
      {actDate && (
        <ReservationDate
          roomDate={roomDate}
          actDate={actDate}
          setActDate={setActDate}
          checkInDate={checkInDate}
          setCheckInDate={setCheckInDate}
          checkOutDate={checkOutDate}
          setCheckOutDate={setCheckOutDate}
          setDays={setDays}
        />
      )}
      {actPerson && (
        <ReservationPerson
          maxGuest={maxGuest}
          countAdult={countAdult}
          countKid={countKid}
          countPerson={countPerson}
          setCountPerson={setCountPerson}
          setCountAdult={setCountAdult}
          setCountKid={setCountKid}
        />
      )}
    </Wrapper>
  );
}

export default DetailSider;

const Wrapper = styled.div`
  position: sticky;
  padding: 24px;
  top: 60px;
  color: ${props => props.theme.TextColor};
  border: 1px solid ${props => props.theme.underLineColor};
  width: 380px;
  border-radius: 12px;
`;

const SiderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SiderTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 22px;
  line-height: 30px;
`;

const SiderForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 112px;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.subTextColor};
  border-radius: 8px;
`;

const FormDate = styled.div`
  display: flex;
  height: 56px;
  border-bottom: 1px solid ${props => props.theme.subTextColor};
`;

const FormCheckIn = styled.div`
  position: relative;
  width: 50%;
  padding: 26px 12px 10px;
  color: ${props => props.theme.subTextColor};
  border-right: 1px solid ${props => props.theme.subTextColor};
  font-size: 14px;
`;

const FormCheckOut = styled.div`
  position: relative;
  width: 50%;
  padding: 26px 12px 10px;
  color: ${props => props.theme.subTextColor};
  font-size: 14px;
`;

const FormPerson = styled.div`
  position: relative;
  height: 56px;
  padding: 28px 14px 14px 14px;
  font-size: 14px;

  .iconDown {
    position: absolute;
    top: 15px;
    right: 10px;
    font-size: 30px;
  }
`;

const FormTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 13px;
  color: ${props => props.theme.TextColor};
  font-size: 10px;
  font-weight: bold;
`;

const SiderBtn = styled.button`
  height: 48px;
  background-color: #ea224f;
  color: white;
  align-items: center;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  text-align: center;
`;

const SiderSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const SiderSelectText = styled.p`
  margin: 0 auto;
  padding: 20px 0;
  font-size: 14px;
`;

const AddList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

const AddListTitle = styled.p`
  margin-bottom: 20px;
  border-bottom: 1px solid;
`;

const AddListPrice = styled.p`
  font-size: 16px;
`;

const AddSum = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.underLineColor};
  font-weight: bold;
  font-size: 16px;
`;

const AddSumTitle = styled.p`
  font-size: 16px;
`;

const AddSumPrice = styled.p`
  font-size: 16px;
`;
