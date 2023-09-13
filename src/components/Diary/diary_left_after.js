import React from 'react';

// 질문 컴포넌트
export function Question() {

    return (
        <div>
            <p className='q'>?월 ?일의 질문 - 강아지와 여행 가고 싶은 곳이 있나요?</p>
        </div>
    );
}

// 답변 컴포넌트
export function Answer() {

    return (
        <div className='answer-div'>
            <div>
                <p className='date'>2023. 7. 11.</p>
            </div>
            <div>
                <p className='answer'>A. 미국에 가고 싶어용~</p>
            </div>
        </div>
    );
}


export function AnswerByYear() {

    return (
        <div>
            <Question />
            <Answer />
        </div>
    );
}