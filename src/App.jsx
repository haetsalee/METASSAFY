import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Register from './pages/Register';
import Board from './pages/Board';
import Profile from './components/profile/Profile';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/board" element={<Board />} />
        {/* <Route path='/' element={ <MainPage/> } /> */}
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/user-profile-page" element={<UserProfilePage />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/profile-modify" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
