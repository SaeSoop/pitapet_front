
import React from 'react';
import './join.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Input,Agree } from '../../../components/Authpage/join';
import { Button } from 'reactstrap';


function Join() {
    return (
        <form className='form-horizontal'>
            {/* main */}
            <h1 className="title">회원가입</h1>
            <hr />

            {/* 정보 input */}
            <Button className='overlapBtn' color='danger' outline> 중복확인 </Button>
            <Input title="이메일" type="email" id="email" placehodler="예) pitapet@naver.com" button="중복확인"></Input>
            <Input title="비밀번호" type="password" id="password" placehodler="비밀번호를 입력하세요"></Input>
            <Input title="비밀번호 확인" type="password" id="password_check" placehodler="비밀번호를 한번 더 입력하세요"></Input>
            <Button className='checkBtn' color='secondary' outline> 본인인증 </Button>
            <Input title="휴대전화" type="text" id="phone" placehodler="숫자만 입력하세요"></Input>
            <Input title="닉네임" type="text" id="nickname" placehodler="이름을 입력하세요"></Input>
            <Input mode="gender"></Input>
            <Input title="생년월일" type="text" id="birth" placehodler="YYYY/MM/DD"></Input>
            <hr />

            {/* 이용약관 동의 */}
            <Agree></Agree>

            {/* 회원가입 버튼 */}
            <Button className="signBtn"> 회원가입 </Button>
        </form>
    );
}

export default Join;