import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Home from "../../pages/MainPage/mainpage.js";
import DogInfo from "../../pages/DogInfoPage/doginfo.js";
import Diary from "../../pages/DiaryPage/diary.js";
import Photo from "../../pages/PhotoPage/dogphoto.js";
import LogIn from '../../pages/AuthPage/login/login';
import SignUp from '../../pages/AuthPage/join/signup';
import FindId from '../../pages/AuthPage/find/findid';
import FindPwd from "../../pages/AuthPage/find/findpwd.js";


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
          {/* <Route path="/login" element={<LogIn />} render={(props)=> <LogIn {...props} loginCallBack={loginCallBack}/>} /> */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/findid" element={<FindId />} />
          <Route path="/findpwd" element={<FindPwd />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;