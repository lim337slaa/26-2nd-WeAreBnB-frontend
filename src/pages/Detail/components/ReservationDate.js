import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { DayPickerRangeController } from 'react-dates';
// import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';

function ReservationDate({
  roomDate,
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
  setDays,
}) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [focusedInput, setFocusedInput] = useState('startDate');
  const [unavailableDates, setUnavailableDates] = useState([]);

  useEffect(() => {
    let resultArr = [];
    let newArr = [];
    {
      roomDate &&
        roomDate.map((info, idx) => {
          newArr = getDateRange(info.check_in, info.check_out);
          newArr.splice(-1, 1);
          return resultArr.push(newArr);
        });
      setUnavailableDates(flattenArray(resultArr));
    }
  }, [setUnavailableDates, roomDate]);

  const flattenArray = arr => {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(
        Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten
      );
    }, []);
  };
  const getDateRange = (startDate, endDate) => {
    let listDate = [];
    let dateMove = new Date(startDate);
    let strDate = startDate;
    if (startDate === endDate) {
      strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(strDate);
    } else {
      while (strDate < endDate) {
        strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
      }
    }
    return listDate;
  };

  useEffect(() => {
    startDate && setCheckInDate(startDate.format('YYYY-MM-DD'));
    endDate && setCheckOutDate(endDate.format('YYYY-MM-DD'));
  }, [startDate, endDate, setCheckInDate, setCheckOutDate]);

  useEffect(() => {
    if (checkOutDate !== '') {
      calculateDays();
    }
  }, [checkOutDate]);

  const calculateDays = () => {
    const date1 = new Date(checkInDate);
    const date2 = new Date(checkOutDate);
    const elapsedMSec = date2.getTime() - date1.getTime();
    const elapsedDay = elapsedMSec / 1000 / 60 / 60 / 24;

    if (elapsedDay > 0) {
      setDays(elapsedDay);
    }
  };

  const isBlocked = day => {
    return unavailableDates.some(
      date => day.format('YYYY-MM-DD') === date,
      'day'
    );
  };

  const isOutsideRange = day => day.isBefore(moment().subtract(1, 'days'));

  return (
    <Wrapper>
      <DayPickerRangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={({ startDate, endDate }) => {
          setStartDate(startDate);
          setEndDate(endDate);
        }}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => {
          setFocusedInput(focusedInput || 'startDate');
        }}
        isDayBlocked={isBlocked}
        isOutsideRange={isOutsideRange}
        numberOfMonths={2}
      />
    </Wrapper>
  );
}

export default ReservationDate;

const Wrapper = styled.div`
  position: absolute;
  top: 160px;
  right: 22px;
  border: 1px solid;
  z-index: 300;

  //하단 초록색 접는 부분
  .DayPickerKeyboardShortcuts_buttonReset {
    display: none;
  }
  .CalendarDay__default {
    border: none;
    border-radius: 50%;
    vertical-align: middle;
    outline: none;
  }

  .CalendarDay__default:hover {
    background: transparent;
    border: none;
    color: black;
    box-shadow: inset 0 0 0 1px black;
  }

  .CalendarDay__selected_span {
    background-color: #f7f7f7;
    background-color: #e5e5e5;
    border: none;
    color: black;
  }

  // 체크인 체크아웃이 선택되었을 때 그 사의 날짜들에 호버 혹은 클릭했을 시 스타일
  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    color: black;
    background-color: #f7f7f7;
  }

  // 선택된 체크인 체크아웃 날짜에 대한 스타일
  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: black;
    border: none;
    color: white;
  }

  // 블록된 날짜에 대한 스타일링
  .CalendarDay__blocked_calendar,
  .CalendarDay__blocked_calendar:active,
  .CalendarDay__blocked_calendar:hover {
    background: white;
    border: none;
    color: #d2d2d2;
    color: #ff395b;
    box-shadow: none;
    text-decoration: line-through;
  }

  // 선택될 범위에 대한 스타일링
  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    color: black;
    background-color: #f7f7f7;
    background-color: #efefef;
    border: none;
  }

  // 요일 표시 부분에 대한 스타일.
  .CalendarMonth_caption {
    margin-bottom: 10px;
  }
`;
