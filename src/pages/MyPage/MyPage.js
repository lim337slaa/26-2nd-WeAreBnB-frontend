import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ImStarFull } from 'react-icons/im';
import { MdReviews } from 'react-icons/md';
import MyProfile from './components/MyProfile';
import MyReservation from './components/MyReservation';
import MyReview from './components/MyReview';
import { API } from '../../config';

function MyPage() {
  const [profile, setProfile] = useState('');
  const [roomLists, setRoomLists] = useState([]);
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    getMyProfile();
  }, []);

  const getMyProfile = () => {
    //http://10.58.1.56:8000/users/profile
    fetch(`${API}/users/profile`, {
      headers: {
        Authorization: process.env.REACT_APP_USER_TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => setProfile(data.result));
  };

  useEffect(() => {
    //http://10.58.1.56:8000/reservations
    fetch(`${API}/reservations`, {
      headers: {
        Authorization: process.env.REACT_APP_USER_TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => setRoomLists(data.results.reservations));
  }, []);

  useEffect(() => {
    getMyReview();
  }, []);

  const getMyReview = () => {
    //http://10.58.6.228:8000/reviews
    fetch(`${API}/reviews`, {
      headers: {
        Authorization: process.env.REACT_APP_USER_TOKEN,
      },
    })
      .then(res => res.json())
      .then(data => setReviews(data.results));
  };

  return (
    <div>
      {
        (profile,
        roomLists,
        reviews && (
          <MyPageWrapper>
            <MyProfile
              userImg={profile.profile_image_url}
              userName={profile.name}
              getMyProfile={getMyProfile}
            />
            <MyLog>
              <HelloUser>
                <MyName>
                  안녕하세요. <Name>{profile.name}</Name>님.
                </MyName>
                <Title>
                  <ImStarFull size="20" color="#999" />
                  &nbsp;이전예약
                </Title>
              </HelloUser>
              <MyReservation roomList={roomLists} />
              <NextTitle>
                <MdReviews size="20" color="#999" />
                &nbsp;예약후기
              </NextTitle>
              <MyReview
                roomList={roomLists}
                reviews={reviews.reviews}
                getMyReview={getMyReview}
              />
            </MyLog>
          </MyPageWrapper>
        ))
      }
    </div>
  );
}

const MyPageWrapper = styled.article`
  padding: 5rem 0;
  margin: 0 auto;
  width: 1200px;
`;

const MyLog = styled.section`
  float: right;
  width: 820px;
`;

const HelloUser = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Title = styled.h4`
  padding-top: 10px;
  font-size: 1.2rem;
`;

const MyName = styled.h2`
  font-size: 2.2rem;
`;

const Name = styled.span`
  font-weight: bold;
`;

const NextTitle = styled.h4`
  margin-top: 3rem;
  padding-top: 10px;
  font-size: 1.2rem;
  text-align: right;
`;

export default MyPage;
