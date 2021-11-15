import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import RoomLists from './pages/RoomLists/RoomLists';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';

const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/roomlists" element={<RoomLists />} />
        <Route exact path="/detail" element={<Detail />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
