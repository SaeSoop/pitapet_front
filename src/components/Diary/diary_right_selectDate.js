import React, {useState} from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import moment from "moment/moment";
import 'react-calendar/dist/Calendar.css';
import HorizonLine from "../../utils/horizontal_line";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
  gap: 20px;
  align-items: center;
  margin: 30px 0 0 0;
`;
const DotBox = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
`;


// 달력 컴포넌트
export const DiaryCalendar = ({ user }) => {
    const [value, onChange] = useState(new Date());
    const dateArr = ["2023. 09. 02."];
    return (
      <Container>
        <Calendar
          onChange={onChange}
          value={value}
          next2Label={null}
          prev2Label={null}
          showNeighboringMonth={false}
          formatDay={(locale, date) =>
            //xx일 -> xx 으로 format 변경
            new Date(date).toLocaleDateString("en-us", {
              day: "2-digit",
            })
          }
          tileContent={({ date, view }) => {
            //
            const exist = dateArr.find(
              (oneDate) =>
                oneDate ===
                String(
                  new Date(date).toLocaleDateString("ko", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                )
            );
            return (
              <>
                <DotBox>{exist && 
                    <span className="material-symbols-outlined footprint">
                        pets
                    </span>
                }</DotBox>
              </>
            );
          }}
        />
        <p>
          {new Date(value).toLocaleDateString("ko", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </Container>
    );
  };

// 일기 보기 버튼
export function ShowButton() {
    // 작성 글 없으면 alert

    return (
        <div className="save">
            <button className="submitBtn">
                일기 보기
            </button>
        </div>
    );
}

// 날짜 선택 컴포넌트
export function SelectDate() {
    return (
        <div>
            {/* 날짜 입력 요청 텍스트 */}
            <div style={{margin: "30px 0"}}>
                <HorizonLine text="원하는 날짜를 선택하세요" />
            </div>
            {/* 연월 선택 */}
        
            {/* 달력 */}
            <div>
                <DiaryCalendar />
            </div>

            {/* 일기 보기 버튼 */}
            <div>
                <ShowButton />
            </div>
        </div>
    );
}