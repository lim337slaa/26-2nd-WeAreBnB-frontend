import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import FilterButton from './components/FilterButton';
import RoomBox from './components/RoomBox';
import Map from './components/Map';
import { SUB_FILTER } from './components/data';

const LIMIT = 15;
const PAGES = new Array(1, 2, 3);

function RoomLists() {
  const [rooms, setRooms] = useState([]);
  // const [subFilters, setSubFilters] = useState([]); // FIXME: 백엔드에 데이터전달 방식 논의 후 활성화 예정
  const [minPrice, setMinPrice] = useState(10000);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [roomType, setRoomtype] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(
      `/data/Rooms.json`
      // `http://10.58.6.96:8000/rooms?price_max=${maxPrice}&price_min=${minPrice}`
    );
  }, []);

  const changPageNumber = index => {
    const pagination = `?limit=${LIMIT}&offset=${LIMIT * index}`;
    navigate(`/RoomLists${pagination}`);
  };

  useEffect(() => {
    // FIXME: 추후에 백엔드 작업이 다 끝나면 지울 예정입니다.
    fetch('/data/rooms.json')
      .then(res => res.json())
      .then(data => setRooms(data.results));

    // fetch(`http://10.58.6.96:8000/rooms${location.search}`)
    //   .then(res => res.json())
    //   .then(data => setRooms(data.results));
  }, [location]);

  const moveDetailPage = id => {
    navigate(`/rooms/${id}`);
  };

  useEffect(() => {
    if (minPrice || maxPrice) {
      fetch(
        `/data/Rooms.json`
        // `http://10.58.6.96:8000/rooms?price_max=${maxPrice}&price_min=${minPrice}`
      )
        .then(res => res.json())
        .then(data => setRooms(data.results));
    } else if (roomType.length > 0) {
      fetch(
        `/data/Rooms.json`
        // `http://10.58.6.96:8000/rooms?price_max=${maxPrice}&price_min=${minPrice}&${roomType}`
      )
        .then(res => res.json())
        .then(data => setRooms(data.results));
    }
  }, [minPrice, maxPrice, roomType]);

  const applyPriceFilterCondition = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    const quary = `price_max=${max}&price_min=${min}`;
    navigate(`?${quary}`);
  };

  const applyRoomTypeCondition = types => {
    const quary = `price_max=${maxPrice}&price_min=${minPrice}`;

    const selectRoomType = [];

    types.map(type => {
      selectRoomType.push(`room_type=${type}`);
    });

    const roomTypeQuary = selectRoomType.join('&');
    setRoomtype(roomTypeQuary);

    !selectRoomType.length > 0
      ? navigate(`?${quary}`)
      : navigate(`?${quary}&${roomTypeQuary}`);
  };

  return (
    <div>
      <Filter>
        <PriceFilter>
          <FilterButton
            name="요금"
            applyPriceFilterCondition={applyPriceFilterCondition}
          />
        </PriceFilter>
        <TypeFilter>
          <FilterButton
            name="숙소 유형"
            applyRoomTypeCondition={applyRoomTypeCondition}
          />
        </TypeFilter>
        <Line />
        <SubFilter>
          {SUB_FILTER.map(subfilter => {
            return <FilterButton key={subfilter.id} name={subfilter.name} />;
          })}
        </SubFilter>
        <br />
      </Filter>
      <RoomList>
        <div className="roomList">
          {rooms.map(room => {
            return (
              <RoomBox
                key={room.room_id}
                id={room.room_id}
                images={room.images}
                roomType={room.room_type}
                title={room.title}
                roomDetail={room.room_detail}
                roomOption={room.room_options}
                price={room.price}
                starRating={room.rating}
                review={room.review}
                moveDetailPage={moveDetailPage}
              />
            );
          })}
          <Pagination>
            {PAGES.map((page, index) => {
              return (
                <PageNumber
                  key={index + 1}
                  onClick={() => {
                    changPageNumber(index);
                  }}
                >
                  {page}
                </PageNumber>
              );
            })}
          </Pagination>
        </div>
        <Map />
      </RoomList>
    </div>
  );
}

export default RoomLists;

const flexMix = (align = 'center', justify = 'center') => css`
  display: flex;
  align-items: ${align};
  justify-content: ${justify};
`;

const Filter = styled.div`
  ${flexMix('center', 'space-beween')};
  width: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const PriceFilter = styled.div`
  min-width: 60px;
`;

const TypeFilter = styled.div`
  min-width: 95px;
`;

const Line = styled.div`
  height: 20px;
  margin: 0 0 0 10px;
  border-right: 1px solid ${({ theme }) => theme.borderColor};
`;

const SubFilter = styled.div`
  ${flexMix('center', 'space-beween')};
  flex-wrap: wrap;
  height: 50px;
  border: none;
  overflow: hidden;
`;

const RoomList = styled.div`
  ${flexMix('center', '')};
`;

const Pagination = styled.div`
  ${flexMix('center', 'center')};
  width: 100%;
  height: 30px;
`;

const PageNumber = styled.button`
  margin: 5px;
  border: none;
  background-color: ${({ theme }) =>
    props =>
      props.checked ? theme.borderColor : '#fff'};
  border-radius: 50%;
`;
