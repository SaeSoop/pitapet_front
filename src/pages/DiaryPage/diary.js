import React from 'react';

// 오늘의 질문
import TodayQuestionPage from "./diary_left.js";  // 작성 전 페이지
import TodatQuestionAfterPage from "./diary_left_after.js"; // 작성 후 페이지

// 한 줄 일기
import DiaryPage from "./diary_right.js"; // 작성 전 페이지
import DiaryAfterPage from "./diary_right_after.js";  // 작성 후 페이지
import DiarySelectDatePage from "./diary_right_selectDate.js"; // 일기 날짜 선택 페이지

import './diary.css';

function Diary() {
  return (
    <div className='diary-page-segment'>

      {/* 오늘의 질문 */}
      <div className='left'>
        {/* 작성 전 */}
        <TodayQuestionPage />
      
        {/* 작성 후 */}
        {/* <TodatQuestionAfterPage /> */}
      </div>
      <div className="vr-div">
        <div class='vr-center'></div> 
      </div>

      {/* 한 줄 일기 */}
      <div className='right'>
        {/* 작성 전 */}
        {/* <DiaryPage /> */}

        {/* 일기 보기 */}
        <DiaryAfterPage />

        {/* 날짜 선택 */}
        {/* <DiarySelectDatePage /> */}
      </div>
    </div>
  );
};
  
  export default Diary;