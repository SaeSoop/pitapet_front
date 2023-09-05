import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer.js';
import MyDogm from "../pages/MyDogPage/mydogm/mydogm.js";
import Mypuppymore from '../pages/MyDogPage/mydogp/mydogp-more';
import Diary from "../pages/DiaryPage/diary.js";
import Photo from "../pages/PhotoPage/dogphoto.js";
import LogIn from '../pages/AuthPage/login/login';
import Join from '../pages/AuthPage/join/join';
import MyPart from '../pages/MyPage/mypart';
import FindId from '../pages/AuthPage/find/findid';
import FindPwd from "../pages/AuthPage/find/findpwd.js";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/mydogm" element={<MyDogm />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/dogphoto" element={<Photo />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<Join />} />
          <Route path="/mypage" element={<MyPart />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpwd" element={<FindPwd />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
