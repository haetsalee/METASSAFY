import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from './libs/PublicRoute';
import PrivateRoute from './libs/PrivateRoute';

import Home from './pages/Home';

import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Register from './pages/Register';
import ProfileModify from './components/profile/ProfileModify';
import Board from './pages/Board';
import ProfilePage from './pages/ProfilePage';
import useInfo from './hooks/use-info';
import UnityPage from './pages/UnityPage';

function App() {
  useInfo();

  return (
    <Layout>
      <Routes>
        {/* 일반 라우터 */}
        <Route path="/" element={<Home />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
        {/* 로그인 필요한 라우터 */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="profile" element={<ProfilePage user_id="ssafy" />} />
          <Route path="profile/modify" element={<ProfileModify />} />
        </Route>
        {/* <Route path="/" element={<Home />} /> */}

        <Route path="/board" element={<Board />} />
        {/* 여기서부터 무언가... */}
        <Route path="/Page1" element={<Page1 />} />
        {/* <Route path="/Page2" element={<Page2 />} /> */}
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        {/* <Route path="/profile-modify" element={<Profile />} /> */}
        <Route
          path="/unity"
          element={
            <UnityPage
              style={{
                margin: 0,
                width: '100vw',
                height: '100vh',
              }}
            />
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
