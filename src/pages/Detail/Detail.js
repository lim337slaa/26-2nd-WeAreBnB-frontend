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
  const [roomInfo, setRoomInfo] = useState({});
  const [roomImage, setRoomImage] = useState([]);
  const [roomDate, setRoomDate] = useState([]);
  const [review, setReview] = useState(null);

  useEffect(() => {
    // const id = window.location.pathname;
    // fetch(`http://10.58.7.133:8000${id}`)
    fetch('/data/detailData.json')
      .then(res => res.json())
      .then(data => {
        setRoomInfo(data.results.room_info);
        setRoomImage(data.results.room_image);
        setRoomDate(data.results.reservation_date);
        setReview(data.results.review_info);
      });
  }, []);

  return (
    <div>
      {
        (roomInfo,
        roomImage,
        review && (
          <Wrapper>
            <DetailTitle
              title={roomInfo.title}
              average={roomInfo.average_rating}
              reviewCount={roomInfo.review_count}
              location={roomInfo.location}
            />
            <DetailImages roomImage={roomImage} />
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
                <ReservationSider
                  price={roomInfo.price}
                  maxGuest={roomInfo.max_guest}
                  roomDate={roomDate}
                  id={roomInfo.id}
                />
              </ContentFrontRight>
            </ContentFront>
            <ContentBack>
              <DetailReview
                reviewCount={roomInfo.review_count}
                reviewAverage={roomInfo.average_rating}
                review={review}
              />
              <DetailCheck />
            </ContentBack>
          </Wrapper>
        ))
      }
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
