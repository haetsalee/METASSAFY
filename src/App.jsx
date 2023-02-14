import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './libs/PublicRoute';
import PrivateRoute from './libs/PrivateRoute';

import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import DebuggingPage from './pages/DebuggingPage';
import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Register from './pages/Register';
import ProfileModify from './components/profile/ProfileModify';
import IntroPage from './pages/IntroPage';
import BoardPage from './pages/BoardPage';
import ProfilePage from './pages/ProfilePage';
import WebProfilePage from './pages/WebProfilePage';
import WebProfileModify from './pages/WebProfileModify';
import DevelopersPage from './pages/DevelopersPage';
import LoginPage from './pages/LoginPage';
import UnityPage from './pages/UnityPage';
import VideoChatPage from './pages/VideoChatPage';
import OpenViduPage from './pages/OpenViduPage';

import useInfo from './hooks/use-info';
import PhoneChatingList from './pages/phone_pages/PhoneChatingList';
import PhoneChatingRoom from './pages/phone_pages/PhoneChatingRoom';
import Metaverse from './pages/Metaverse';
import PhoneFriendPage from './pages/phone_pages/PhoneFriendPage';
import PhoneChatEdit from './pages/phone_pages/PhoneChatEdit';
import ArticlePage from './pages/ArticlePage';
import WritePage from './pages/WritePage';
import { useSelector } from 'react-redux';
import PhoneHomePage from './pages/phone_pages/PhoneHomePage';
import PhoneApp from './pages/phone_pages/PhoneApp';
import NotFound from './pages/NotFound';
import BoardModalVersion from './components/board/BoardModalVersion';
import BoardOuter from './components/board/BoardOuter';

function App() {
  useInfo();
  const user = useSelector((state) => state.auth.user);
  // const user = getJsonLocalUserInfo()['userId'] || 'annonymous';

  return (
    <Routes>
      {/* Navbar */}
      <Route element={<Layout />}>
        {/* 일반 라우터 */}
        <Route path="/" element={<MainPage />} />
        <Route path="debugging" element={<DebuggingPage />} />
        <Route path="intro" element={<IntroPage />} />
        <Route path="developers" element={<DevelopersPage />} />
        <Route path="openvidu-page" element={<OpenViduPage />} />
        <Route element={<PublicRoute />}>
          {/* <Route path="login" element={<LoginPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
        </Route>
        {/* 로그인 필요한 라우터 */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="Page1" element={<Page1 />} />
          {/* <Route path="Page2" element={<Page2 />} /> */}
          <Route path="Page3" element={<Page3 />} />
          {/* 실제 서비스 페이지 */}
          <Route path="intro" element={<IntroPage />} />
          <Route path="board/" element={<BoardOuter />}>
            <Route path="list" element={<BoardPage />} />
            <Route path=":id" element={<ArticlePage />} />
            <Route path="write" element={<WritePage />} />
            <Route path="write/:id" element={<WritePage />} />
          </Route>
          <Route path="board/list" element={<BoardPage />} />
          <Route path="board/:id" element={<ArticlePage />} />
          <Route path="board/write" element={<WritePage />} />
          <Route path="board/write/:id" element={<WritePage />} />
          <Route
            path="profile/:user_id"
            element={<WebProfilePage user_id={user?.user_id} />}
          />
          <Route path="profile/modify" element={<WebProfileModify />} />
          <Route path="metassafy/" element={<Metaverse />}>
            <Route path="videochat/" element={<OpenViduPage />} />
            <Route path="phone/" element={<Page1 />}>
              <Route path="home" element={<PhoneHomePage />} />
              <Route path="app" element={<PhoneApp />} />
              <Route
                path="profile/:user_id"
                element={<ProfilePage user_id={user?.user_id} />}
              />
              <Route path="profile/modify" element={<ProfileModify />}></Route>
              <Route path="chat/" element={<PhoneChatingList />} />
              <Route path="chat/room/:id" element={<PhoneChatingRoom />} />
              <Route path="chat/room/:id/edit" element={<PhoneChatEdit />} />
              <Route path="friend" element={<PhoneFriendPage />}></Route>
            </Route>
          </Route>
        </Route>
      </Route>
      {/* Navbar 제외 */}
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/register" element={<Register />} />

        <Route path="unity" element={<UnityPage />}>
          <Route path="videochat/" element={<OpenViduPage />} />
          <Route path="phone/" element={<Page1 />}>
            <Route path="home" element={<PhoneHomePage />} />
            <Route path="app" element={<PhoneApp />} />
            <Route
              path="profile/:user_id"
              element={<ProfilePage user_id={user?.user_id} />}
            />
            <Route path="openvidu-page" element={<OpenViduPage />} />

            <Route path="profile/modify" element={<ProfileModify />}></Route>
            <Route path="chat/" element={<PhoneChatingList />} />
            <Route path="chat/room/:id" element={<PhoneChatingRoom />} />
            <Route path="chat/room/:id/edit" element={<PhoneChatEdit />} />
            <Route path="friend" element={<PhoneFriendPage />}></Route>
          </Route>
          <Route path="board/" element={<BoardModalVersion />}>
            <Route path="list" element={<BoardPage />} />
            <Route path=":id" element={<ArticlePage />} />
            <Route path="write" element={<WritePage />} />
            <Route path="write/:id" element={<WritePage />} />
          </Route>
        </Route>
      </Route>
      {/* 404 */}
      <Route element={<Layout />}>
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
