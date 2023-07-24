import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from '../Header/Header.js';
import Home from "../../pages/MainPage/mainpage.js";
import DogInfo from "../../pages/DogInfoPage/doginfo.js";
import Diary from "../../pages/DiaryPage/diary.js";
import Photo from "../../pages/PhotoPage/dogphoto.js";
import Auth from "../../pages/AuthPage/login.js";

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
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
