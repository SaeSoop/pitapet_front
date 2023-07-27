import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header.js';

import Home from "../../pages/MainPage/mainpage.js";
import DogInfo from "../../pages/DogInfoPage/doginfo.js";
import Diary from "../../pages/DiaryPage/diary.js";
import Photo from "../../pages/PhotoPage/dogphoto.js";
import LogIn from "../../pages/AuthPage/login.js";
import SignUp from "../../pages/AuthPage/signup.js";
import FindId from "../../pages/AuthPage/findid.js";
import FindPwd from "../../pages/AuthPage/findpwd.js";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doginfo" element={<DogInfo />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/dogphoto" element={<Photo />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpwd" element={<FindPwd />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
