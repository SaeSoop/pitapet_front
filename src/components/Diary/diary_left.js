// 오늘의 질문 컴포넌트
import React from 'react';
import Form from 'react-bootstrap/Form';
// import axios from 'axios';
// import ReadQuestionAPI from '../../service/API/diary/readTodayQuestion';

// 입력창 컴포넌트
export function Input() {
    return (
        <div className='input-sz'>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </div>
    );
}


// 질문-답변-저장 컴포넌트
export function QandA(props) {
    
    return (
        <div>
            {/* question */}
            <div className='question'>
                <div className='QA'>
                    <span className='QA-font'>Q.</span>
                </div>
                <div className='question-text'>
                    <span className='QA-font'></span>
                </div>
            </div>

            {/* answer */}
            <div className='answer'>
                <div className='QA'>
                    <span className='QA-font'>A.</span>
                </div>
                <Input />
            </div>
            
            {/* 저장하기 */}
            <div className='save'>
                <button type="submit" className="submitBtn">
                    저장
                </button>
            </div>
        </div>
    );
}

