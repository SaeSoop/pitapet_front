import React from 'react';
import './diary_left_after.css';
import { AnswerByYear } from "../../components/Diary/diary_left_after.js"; 

function TodayQuestionAfterPage() {
      
    return (
        <div className='today-question'>
            {/* 오늘의 질문 타이틀 */}
            <h2>오늘의 질문</h2>
            <p>1년마다 동일한 질문이 주어집니다</p>


            <AnswerByYear />
        </div>
    );
};

export default TodayQuestionAfterPage;