// 한 줄 일기 컨포넌트
import React, { useState, useRef } from "react";
import { Form } from 'react-bootstrap';

// 기분 선택 컴포넌트
export function Mood() {

    const [isClicked, setIsClicked] = useState(false);
    const moodArr =['🥰', '😆', '😐', '😣', '😭'];

    const handleClick = (idx) => {
        const newArr = Array(moodArr.length).fill(false);
        newArr[idx] = true;
        setIsClicked(newArr);
    }

    return (
        <div className="mood-option">
            {moodArr.map((elm, idx) => {
                return (
                    <p 
                        onClick={()=>{handleClick(idx)}}
                        className={isClicked[idx] ? 'clicked-mood-icon' : 'mood-icon'}
                    >{elm}</p>
                );
            })}
        </div>
    );
}

// 공개 비공개 선택 컴포넌트
export function IsPrivate() {

    const [isPrivate, setIsPrivate] = useState(false);

    // 공개 선택한 경우
    const handlePublic = () => {
        setIsPrivate(false);
    }

    // 비공개 선택한 경우
    const handlePrivate = () => {
        setIsPrivate(true);
    }

    return (
        <div className="lock-option">
            <span className="material-symbols-outlined mx-1 lock-icon" 
                style={{color: isPrivate ? 'rgba(128, 128, 128, 0.5)' : 'black'}}
                onClick={()=>{handlePublic()}}>
                lock
            </span>
            <span className="material-symbols-outlined mx-1 lock-icon" 
                style={{color: isPrivate ? 'black' : 'rgba(128, 128, 128, 0.5)'}}
                onClick={()=>handlePrivate()}>
                lock_open_right
            </span>
        </div>
    );
}

// 입력창 컴포넌트 (제목, 내용)
export function Input() {
    return (
        <div className="input-sz">
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={1} />
            </Form.Group>
        </div>
    );
}


// 사진 첨부 컴포넌트
export function PutImage() {

    const imageInput = useRef();

    // 버튼클릭시 input태그에 클릭이벤트
    const onCickImageUpload = () => {
        imageInput.current.click();
    };
    
    return (
        <div>
            <div className="image-div">
                <input type="file" style={{ display: "none" }} ref={imageInput} />
                <button onClick={onCickImageUpload} style={{ border: "none" }}>
                    <span className="material-symbols-outlined add-icon">
                        add
                    </span>
                </button>
            </div>
        </div>
    );
}

// 일기 쓰기 컴포넌트
export function DiaryDetails(props) {

    return (
        <div>
            <div className="select-option">
                {/* 기분&공개 - 한 줄로 우측 정렬*/}
                <Mood />
                <IsPrivate />
            </div>

            {/* 제목 */}
            <div className="diary-title">
                <div className="title-content">
                    <span className="title-content-font">제목</span>
                </div>
                <Input />
            </div>

            {/* 내용 */}
            <div className="diary-content">
                <div className="title-content">
                    <span className="title-content-font">내용</span>
                </div>
                <Input />
            </div>

            <div className="upload-div">
                {/* 사진 첨부 */}
                <div className="title-content">
                    <span className="title-content-font">사진 첨부</span>
                </div>
                <PutImage />
            </div>

            <div>
                {/* 저장하기 버튼 */}
                <div className='save'>
                    {/* button - 중앙 */}
                    <button type="submit" className="submitBtn">
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
}
