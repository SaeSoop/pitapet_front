// 한 줄 일기 컨포넌트
import React from "react";
import DogExImg from "./bongook.jpg";

// 기분 선택 컴포넌트
export function Mood() {

    return (
        <div className="mood-option">
            <p>😆</p>
        </div>
    );
}

// 공개 비공개 선택 컴포넌트
export function IsPrivate() {

    return (
        <div className="lock-option">
            <span className="material-symbols-outlined mx-1 lock-icon">lock</span>
        </div>
    );
}

// 이미지 컴포넌트

// 일기 쓰기 컴포넌트
export function WrittenDiary(props) {

    return (
        <div>
            <div className="select-option">
                <Mood />
                <IsPrivate />
            </div>

            {/* 제목 */}
            <div className="diary-title">
                <div className="title-content">
                    <span className="title-content-font">제목</span>
                </div>
                <div className="title-content-text">
                    <p className="title-content-text-font">애카에 가다</p>
                </div>
            </div>

            {/* 내용 */}
            <div className="diary-content">
                <div className="title-content">
                    <span className="title-content-font">내용</span>
                </div>
                <div className="title-content-text">
                    <p className="title-content-text-font">오늘은 모리와 함께 애견 카페에 다녀왔당~ 모리는 멍푸치노를 먹었다.</p>
                </div>
            </div>

            {/* 사진 */}
            <div className="upload-div2">
                <div className="title-content">
                    <span className="title-content-font">사진</span>
                </div>
                <div className="">
                    <img src={DogExImg} alt="bongsook 1" className="showImage"/>
                </div>
            </div>

            {/* 버튼 */}
            <div>
                <div className="buttons">
                    <button className="rightAfterBtn">
                        이전 글 보기
                    </button>
                    <button className="rightAfterBtn">
                        수정하기
                    </button>
                </div>
            </div>
        </div>
    );
}
