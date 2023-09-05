import React from 'react';
import './mypart.css';
import { Button } from 'reactstrap';
import { Mypageprofile, Squarebox1, Squarebox2, Squarebox3, Squarebox4, MypageInfo, MypageGender } from '../../components/MyPage/mypart';
import { Mypuppylist1 } from '../../components/MyDogPage/mydogm';

function MyPart() {
    return (
        <>  
            {/* 프로필 사진 */}
            <label className='mypagetitle'>My Page</label>
            <label className='mypagepro'>프로필</label>
            <Mypageprofile />
            <hr className="hr-sz" />

            {/* 강아지 */}
            <label className='mypagemypuppy'>내 강아지</label>
            <div className='mypagepuppies'>
                <Mypuppylist1 />
            </div>

            {/* 한줄일기 & 사진첩 */}
            <div className='mypagediandpic'>
                <label className='mypagediary'>한 줄 일기</label>
                <label className='mypagepicture'>사진첩</label>

                <div className='mypageboxes'>
                    <Squarebox1 /><Squarebox2/>
                    <div class='v-line'></div>
                    <Squarebox3/><Squarebox4/>
                </div>
            </div>

            <hr className="hr-sz" />
            <label className='mypagejoin'>계정 정보</label>
            <div className='mypageinfos'>
                <MypageInfo title="이메일" id="email" disabled />
                <MypageInfo title="비밀번호" id="password" placehodler="******" disabled />
                <MypageInfo title="비밀번호 확인" id="password_check" placehodler="******" disabled />
                <MypageInfo title="휴대폰" id="pnumber" disabled />
                <MypageInfo title="닉네임" id="name" disabled />
                <MypageGender />
                <MypageInfo title="생년월일" id="birth" disabled />

                <Button type="submit" className="accmodiBtn"> 수정하기 </Button>
            </div>
        </>
    );
};
  
export default MyPart;