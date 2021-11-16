import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillSafetyCertificate, AiOutlineCheck } from 'react-icons/ai';
import { API } from '../../../config';

export default function MyProfile({ userImg, userName, getMyProfile }) {
  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = e => {
    setImgFile(e.target.files[0]);
  };

  const handlePostImg = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('filename', imgFile);

    fetch(`${API}/users/profile-upload`, {
      method: 'POST',
      headers: {
        Authorization: process.env.REACT_APP_USER_TOKEN,
      },
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('프로필이 업로드 되었습니다!');
          getMyProfile();
        } else {
          alert('프로필 사진을 업로드 해 주세요!');
        }
      });
  };

  return (
    <div>
      {userName && (
        <ProfileWrapper>
          <UserProfile>
            <ProfileImg
              style={{
                backgroundImage:
                  imgFile || userImg
                    ? userImg
                      ? `url(${userImg})`
                      : `url(${URL.createObjectURL(imgFile)})`
                    : `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYmlp9JDeNMaFZzw9S3G1dVztGqF_2vq9nA&usqp=CAU0')`,
              }}
            />
            <ImageWrapper>
              <UploadBtn htmlFor="inputFile">프로필을 고르세요.</UploadBtn>
              <ImgUpload
                type="file"
                id="inputFile"
                accept="image/*"
                onChange={handleChangeFile}
              />
              <SubmitBtn type="submit" onClick={handlePostImg}>
                확인
              </SubmitBtn>
            </ImageWrapper>
            <SelfOkay>
              <AiFillSafetyCertificate size="30" color="#b0b0b0" />
              <SelfName>본인 인증</SelfName>
              <SelfInfo>
                본인 인증 배지를 통해 본인 인증을 마쳤다는 사실을 다른
                사용자에게 보여줄 수 있습니다.
              </SelfInfo>
              <SelfBtn>배지 받기</SelfBtn>
            </SelfOkay>
            <FreeUser>
              <CheckMe>{userName} 인증 완료</CheckMe>
              <CheckUser>
                <AiOutlineCheck size="18" />
                &nbsp;&nbsp; 이메일주소
              </CheckUser>
              <CheckUser>
                <AiOutlineCheck size="18" />
                &nbsp;&nbsp; 전화번호
              </CheckUser>
            </FreeUser>
          </UserProfile>
        </ProfileWrapper>
      )}
    </div>
  );
}

const ProfileWrapper = styled.section`
  position: fixed;
  float: left;
  top: 5rem;
  padding: 2rem;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

const UserProfile = styled.div`
  position: relative;
`;

const ProfileImg = styled.div`
  margin: 0 auto 1rem;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYmlp9JDeNMaFZzw9S3G1dVztGqF_2vq9nA&usqp=CAU0');
  background-size: cover;
  background-position: center;
  width: 120px;
  height: 120px;
  border-radius: 100%;
`;

const ImageWrapper = styled.form`
  position: relative;
`;

const UploadBtn = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
`;

const ImgUpload = styled.input`
  display: none;
`;

const SubmitBtn = styled.button`
  display: block;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const SelfOkay = styled.div`
  padding: 3rem 0 2rem;
  border-bottom: 1px solid #ddd;
`;

const SelfName = styled.h5`
  margin: 1rem 0;
  font-size: 1.1rem;
  font-weight: bold;
`;

const SelfInfo = styled.p`
  line-height: 1.3rem;
  word-break: keep-all;
`;

const SelfBtn = styled.button`
  margin: 1rem 0 0;
  padding: 10px 20px;
  font-size: 1.1rem;
  background: none;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const FreeUser = styled.div`
  padding: 2rem 0 0;
`;

const CheckMe = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: black;
`;

const CheckUser = styled.p`
  line-height: 1.3rem;
`;
