import React from 'react';

// 오늘의 질문
import TodayQuestionPage from "./diary_left.js";  // 작성 전 페이지
                                                  // 작성 후 페이지

// 한 줄 일기
import DiaryPage from "./diary_right.js"; // 작성 전 페이지
                                          // 작성 후 페이지
import DiarySelectDatePage from "./diary_right_selectDate.js"; // 일기 날짜 선택 페이지

import './diary.css';

function Diary() {
  return (
    <div className='diary-page-segment'>
      <div className='left'>
        <TodayQuestionPage />
      </div>
      <div className="vr-div">
        <div class='vr-center'></div> 
      </div>
      <div className='right'>
        {/* <DiaryPage /> */}
        <DiarySelectDatePage />
      </div>
    </div>
  );
};
  
  export default Diary;