import React, { useState } from 'react';
import styled from 'styled-components';
import { FlexMix } from '../../../styles/Mixin';
import { AiOutlineCheck } from 'react-icons/ai';
import { ROOM_TYPE } from './data';

function RoomTypeFilter({
  visibleFilter,
  selectButton,
  applyRoomTypeCondition,
}) {
  const [slectedRoomType, setSlectedRoomType] = useState([]);

  const erasedCondition = () => {
    setSlectedRoomType([]);
  };

  const updateSelected = type => {
    slectedRoomType.includes(type)
      ? setSlectedRoomType(
          slectedRoomType.filter(roomtype => roomtype !== type)
        )
      : setSlectedRoomType(slectedRoomType.concat(type));
  };

  return (
    <Wrapper visibleFilter={visibleFilter}>
      <RoomTypeFilterWrap>
        <NotiFilter>숙소 타입 변경</NotiFilter>

        {ROOM_TYPE.map((roomType, index) => {
          return (
            <ShowRoomType key={roomType.id}>
              <CheckBox
                className={roomType.type}
                slectedRoomType={!slectedRoomType.includes(roomType.type)}
                onClick={() => {
                  updateSelected(roomType.type);
                }}
                value={roomType.type}
              >
                <AiOutlineCheck className="checkIcon" />
              </CheckBox>
              <RoomTypeWrap onClick={() => setSlectedRoomType(roomType.type)}>
                <RoomType>{roomType.type}</RoomType>
                <RoomTypeInfo>{roomType.typeInfo}</RoomTypeInfo>
              </RoomTypeWrap>
            </ShowRoomType>
          );
        })}
      </RoomTypeFilterWrap>
      <ChangeCondition>
        <Erase onClick={() => erasedCondition()}>지우기</Erase>
        <Search
          onClick={() => {
            return selectButton(), applyRoomTypeCondition(slectedRoomType);
          }}
        >
          검색
        </Search>
      </ChangeCondition>
    </Wrapper>
  );
}

export default RoomTypeFilter;

const Wrapper = styled.div`
  display: ${props => (props.visibleFilter ? 'inline-block' : 'none')};
  width: 100%;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 20px;
`;

const RoomTypeFilterWrap = styled.div`
  ${FlexMix('center', 'center')};
  flex-direction: column;
  padding: 20px;
`;

const NotiFilter = styled.div`
  color: ${({ theme }) => theme.fontColor};
  margin: 5px;
`;

const ShowRoomType = styled.div`
  ${FlexMix('flex-start', 'space-between')};
  margin: 5px 0;
`;

const CheckBox = styled.div`
  ${FlexMix('center', 'center')};
  position: relative;
  width: 25px;
  height: 25px;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;

  background-color: ${({ theme }) =>
    props =>
      props.slectedRoomType ? 'white' : theme.keyColor};
  transition: all 0.2s;

  .checkIcon {
    position: absolute;
    top: 3px;
    left: 3px;
    color: #fff;
  }
`;

const RoomTypeWrap = styled.div`
  ${FlexMix('flex-start', '')};
  flex-direction: column;
`;

const RoomType = styled.div`
  font-size: 18px;
  margin: 5px 10px;
`;

const RoomTypeInfo = styled.div`
  width: 300px;
  margin: 5px 10px;

  color: ${({ theme }) => theme.fontColor};
`;

const ChangeCondition = styled.div`
  ${FlexMix('', 'space-between')};
  width: 100%;
  padding: 20px;
  font-size: 12px;
  border-top: 1px solid #000;
`;

const Erase = styled.button`
  padding: 5px 10px;
  background-color: #fff;
  border: 0;
`;

const Search = styled.button`
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;
