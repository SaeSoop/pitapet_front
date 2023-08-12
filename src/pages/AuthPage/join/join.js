
import React, { useState } from 'react';
import './join.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Input, Agree } from '../../../components/Authpage/join';
import { Button } from 'reactstrap';
import joinAPI from '../../../service/API/auth/join';


function Join() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password_check: '',
        pnumber: '',
        name: '',
        sex: '',
        birth: '',
        agreeUse: false,
        agreePriv: false,
    });

    return (
        <form className='form-horizontal' onSubmit={(event) => {
            event.preventDefault();
            if (formData.password !== formData.password_check) {
                event.preventDefault();
                alert('비밀번호와 비밀번호 확인이 불일치합니다.');
            }

        }}>
            {/* main */}
            <h1 className="title">회원가입</h1>
            <hr />

            {/* 정보 input */}
            <Button className='overlapBtn' color='danger' outline> 중복확인 </Button>
            <Input title="이메일" type="email" id="email" placehodler="예) pitapet@naver.com" formData={formData} setFormData={setFormData} ></Input>
            <Input title="비밀번호" type="password" id="password" placehodler="비밀번호를 입력하세요" formData={formData} setFormData={setFormData} ></Input>
            <Input title="비밀번호 확인" type="password" id="password_check" placehodler="비밀번호를 한번 더 입력하세요" formData={formData} setFormData={setFormData} ></Input>
            <Button className='checkBtn' color='secondary' outline> 본인인증 </Button>
            <Input title="휴대전화" type="text" id="pnumber" placehodler="숫자만 입력하세요" formData={formData} setFormData={setFormData} ></Input>
            <Input title="닉네임" type="text" id="name" placehodler="이름을 입력하세요" formData={formData} setFormData={setFormData} ></Input>
            <Input mode="sex" formData={formData} setFormData={setFormData} ></Input>
            <Input title="생년월일" type="text" id="birth" placehodler="YYYYMMDD" formData={formData} setFormData={setFormData} ></Input>
            <hr />

            {/* 이용약관 동의 */}
            <Agree formData={formData} setFormData={setFormData} ></Agree>

            {/* 회원가입 버튼 */}
            <Button type="submit" className="signBtn" onClick={(event)=>{joinAPI(event,formData)}}> 회원가입 </Button>
        </form>
    );
}

export default Join;