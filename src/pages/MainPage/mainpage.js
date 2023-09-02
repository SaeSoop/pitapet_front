import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Slide } from '../../components/MainPage/slider';
import { NoTextLine } from '../../utils/NoTextLine';

function MainPage() {

  return (
    <div className="slider">
      {/* 슬라이드 */}
      <Slide className ="slider"/>

      {/* 선 */}
      <hr 
        className="hr-sz" 
        style={{
          width: "100%",
          padding: "0px",
          margin: "30px 0px 0px 0px",
          height: "1px",
          border: "none", // 이전 배경색 속성을 제거하고 border 속성 추가
          borderTop: "1px solid black" // 검은색 선으로 굵기 1px로 설정
        }}/>

      {/* 한 줄 일기 */}
      <div>
        <h4 style={{ textAlign: "left", padding: "20px 0px 0px 150px"}}>한 줄 일기</h4>
      </div>
    </div>
  );
}

export default MainPage;
