import React from 'react';
import './diary.css';
import './diary_right.css';
import { DiaryDetails } from '../../components/Diary/diary_right.js';

function DiaryPage() {
    return (
      <div className='today-diary'>
        {/* 한 줄 일기 타이틀 */}
        <h2>한 줄 일기</h2>

        {/* 일기 */}
        <DiaryDetails />
      </div>
    );
  };
    
  export default DiaryPage;