
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './signup.css';
import 'bootstrap/dist/css/bootstrap.css';

function SignUp() {


  // const [state, setState] = React.useState({
  //   email: "",
  //   phonenum: ""
  // });
  // const handleChange = event => {
  //   const value = event.target.value;
  //   setState({
  //     ...state,
  //     [event.target.name]: value
  //   });
  // };

  // const handleOnSubmit = event => {
  //   event.preventDefault();

  //   const { email, phonenum } = state;
  //   alert(`You are login with email: ${email} and phonenum: ${phonenum}`);

  //   for (const key in state) {
  //     setState({
  //       ...state,
  //       [key]: ""
  //     });
  //   }
  // };

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
// app.use(
//     '/api',
//     createProxyMiddleware({
//     target: 'http://localhost:3000', // 백엔드 서버 주소로 설정
//     changeOrigin: true, // 요청 도메인을 변경하도록 설정 (필요시)
//     // 다른 필요한 옵션들도 추가할 수 있습니다.
//     })
// );
// };

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        phone: '',
        nickname: '',
        gender: '',
        birth: '',
        agreeUse: false,
        agreePriv: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheck = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:3000/api/user/join', formData, { timeout: 5000 });
            console.log(response.data); // 회원가입 성공 시 서버로부터 온 응답 데이터 처리
        } catch (error) {
            console.error(error); // 회원가입 실패 시 서버로부터 온 에러 데이터 처리
        }
    };

    return (
        <form onSubmit={handleSubmit}>    
            <h1 class="h3 su-4 fw-normal">회원가입</h1>
            <hr />
            <div class="form-group email-line">
                <label for="su1">이메일</label>
                <input type="email" id="email" placeholder="이메일을 입력해주세요." />
                <button type="button" id="email-btn" class="btn btn-primary float-right overlapBtn">
                        중복확인
                </button>
            </div>
            <div class="form-group password-line">
                <label for="su2">비밀번호</label>
                <input type="password" id="password" placeholder='비밀번호를 입력해주세요.'/>
            </div>
            <div class="form-group passwordck-line">
                <label for="su3">비밀번호 확인</label>
                <input type="password" id="passwordck" placeholder='비밀번호를 다시 입력해주세요.'/>
            </div>
            <div class="form-group phone-line">
                <label for="su4">휴대전화</label>
                <input type="text" id="phone" placeholder='숫자만 입력해주세요.'/>
                <button type="button" id="phone-btn" class="btn btn-primary float-right messageBtn">
                        인증번호 받기
                </button>
            </div>
            <div class="form-group nickname-line">
                <label for="su5">닉네임</label>
                <input type="text" id="nickname" placeholder='이름을 입력해주세요.'/>
            </div>
            <div class="form-group gender-line">
                <div label class="gender-select">성별</div>
                <div class="form-check form-check-inline genderck-line">
                    <input class="form-check-input gender-rad" type="radio" name="genderselect" id="gender" value="option" />
                    <label class="form-check-label mx-1" for="inlineRadio1">남자</label>
                </div>
                <div class="form-check form-check-inline genderck-line">
                    <input class="form-check-input gender-rad" type="radio" name="genderselect" id="gender" value="option" />
                    <label class="form-check-label mx-1" for="inlineRadio2">여자</label>
                </div>
                <div class="form-check form-check-inline genderck-line">
                    <input class="form-check-input mx-1 gender-rad" type="radio" name="genderselect" id="gender" value="option" />
                    <label class="form-check-label mx-1" for="inlineRadio3">선택안함</label>
                </div>
            </div>
            <div class="form-group birth-line">
                <label for="su7">생년월일</label>
                <input type="text" id="birth" placeholder='생년월일 8자리를 입력해주세요.'/>
            </div>
            <hr />
            <div class="agree-line">
                <div class='agree-line-txt'>
                    <tr>이용약관 동의</tr>
                </div>
                <div class="form-group agree-total">
                <input type="radio" id="a-radio1" />
                <label for="su8">전체 동의합니다.</label>
                <div class="row agree-ex-txt">
                    <tr>선택 항목에 동의하지 않은 경우 회원가입 및 일반적인 서비스를 사용할 수 없습니다.</tr>   
                </div>
                </div>
                <div class="form-group row agree-more">
                <Link to={"/terms1"} className="terms1-link">
                    약관보기&#62;
                </Link>
                <Link to={"/terms2"} className="terms2-link">
                    약관보기&#62;
                </Link>
                </div>
                <div class="row agree-nece">
                <div class="form-group agree-use">
                    <input type="radio" id="a-radio1" />
                    <label for="su8">이용약관 동의</label><tr>(필수)</tr>
                </div>
                <div class="form-group agree-priv">
                    <input type="radio" id="a-radio2" />
                    <label for="su8">개인정보 수집 이용 및 동의</label><tr>(필수)</tr>
                </div>
                </div>  
            </div>
            <button type="submit" className="signBtn">
                    회원가입  
            </button>
            </form>
        );
    }

export default SignUp;