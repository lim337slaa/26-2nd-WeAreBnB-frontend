import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import RoomLists from './pages/RoomLists/RoomLists';
import Detail from './pages/Detail/Detail';
import MyPage from './pages/MyPage/MyPage';
import Redirect from './pages/Login/components/Redirect';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/roomlists" element={<RoomLists />} />
        <Route path="/rooms/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<Redirect />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
