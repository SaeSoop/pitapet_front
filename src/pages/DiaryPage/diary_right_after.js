import React from 'react';
import './diary.css';
import './diary_right.css';
import './diary_right_after.css';
import { WrittenDiary } from '../../components/Diary/diary_right_after.js';

function DiaryAfterPage() {
    return (
      <div className='today-diary'>
        {/* 한 줄 일기 타이틀 */}
        <h2>한 줄 일기</h2>

        {/* 일기 */}
        <WrittenDiary />
      </div>
    );
  };
    
  export default DiaryAfterPage;