import React, { useState, useEffect } from 'react';
import './diary.css';
import './diary_left.css';
import { QandA } from '../../components/Diary/diary_left.js';
// import ReadQuestionAPI from '../../service/API/diary/readTodayQuestion';

function TodayQuestionPage() {

    const [question, setQuestion] = useState([]);

    // useEffect(() => {
    //     ReadQuestionAPI()
    //         .then(data => {
    //             setQuestion(data)
    //             console.log('data: ', data);    
    //         })
    //         .catch(error => console.error(error));
    // }, []);
      
    return (
        <div className='today-question'>
            {/* 오늘의 질문 타이틀 */}
            <h2>오늘의 질문</h2>

            {/* Question & Answer */}
            <QandA />
        </div>
    );
  };
    
  export default TodayQuestionPage;