import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Layout from './components/layout/Layout';
import MainPage from './pages/MainPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Register from './pages/Register';
import Profile from './components/profile/Profile';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path='/' element={ <MainPage/> } /> */}
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/profile-modify" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
