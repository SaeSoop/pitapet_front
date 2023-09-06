import React from 'react';
import './diary.css';
import './diary_right_selectDate.css';
import 'react-calendar/dist/Calendar.css';
import { SelectDate } from '../../components/Diary/diary_right_selectDate.js';


function DiarySelectDatePage() {
    return (
      <div className='today-diary'>
        {/* 한 줄 일기 타이틀 */}
        <h2>한 줄 일기</h2>

        {/* 날짜 선택 */}
        <SelectDate />
      </div>
    );
  };
    
  export default DiarySelectDatePage;