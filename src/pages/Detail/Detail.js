import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailTitle from './components/DetailTitle';
import DetailImages from './components/DetailImages';
import DetailHostTitle from './components/DetailHostTitle';
import DetailPointDesc from './components/DetailPointDesc';
import DetailDesc from './components/DetailDesc';
import DetailConvenience from './components/DetailConvenience';
import ReservationSider from './components/ReservationSider';
import DetailReview from './components/DetailReview';
import DetailCheck from './components/DetailCheck';

function Detail() {
  const [roomInfo, setRoomInfo] = useState(null);
  const [reservation, setReservation] = useState([]);
  const [review, setReview] = useState({});

  useEffect(() => {
    const id = window.location.pathname.split('/').pop();

    if (review && reservation) {
      fetch(`http://10.58.3.19:8000/rooms/${id}`)
        .then(res => res.json())
        .then(data => {
          setRoomInfo(data.results.room_info);
        });
    }

    if (reservation) {
      fetch(`http://10.58.3.19:8000/reviews/${id}`)
        .then(res => res.json())
        .then(data => {
          setReview(data.results);
        });
    }

    fetch(`http://10.58.3.19:8000/reservations/detail/${id}`)
      .then(res => res.json())
      .then(data => {
        setReservation(data.results.reservation_date);
      });
  }, []);

  return (
    <div>
      {roomInfo && (
        <Wrapper>
          <DetailTitle
            title={roomInfo.title}
            average={review.average_rating}
            reviewCount={review.review_count}
            location={roomInfo.location && roomInfo.location}
          />
          <DetailImages roomImage={roomInfo.room_image} />
          <ContentFront>
            <ContentFrontLeft>
              <DetailHostTitle
                hostName={roomInfo.host}
                roomType={roomInfo.room_type}
                maxGuest={roomInfo.max_guest}
                bedRoom={roomInfo.bedroom}
                bed={roomInfo.bed}
                bath={roomInfo.bath}
              />
              <DetailPointDesc />
              <DetailDesc desc={roomInfo.description} />
              <DetailConvenience roomOption={roomInfo.room_option} />
            </ContentFrontLeft>
            <ContentFrontRight>
              {reservation && (
                <ReservationSider
                  price={roomInfo.price}
                  maxGuest={roomInfo.max_guest}
                  roomDate={reservation}
                  id={roomInfo.id}
                />
              )}
            </ContentFrontRight>
          </ContentFront>
          <ContentBack>
            {review && (
              <DetailReview
                reviewCount={review.review_count}
                reviewAverage={review.average_rating}
                review={review.review_info}
              />
            )}
            <DetailCheck />
          </ContentBack>
        </Wrapper>
      )}
    </div>
  );
}
export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1120px;
`;

const ContentFront = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const ContentFrontLeft = styled.div`
  width: 655px;
`;

const ContentFrontRight = styled.div`
  position: relative;
  width: 380px;
`;

const ContentBack = styled.div`
  border-top: 1px solid ${props => props.theme.underLineColor};
`;
