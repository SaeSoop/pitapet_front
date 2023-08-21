import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import HorizonLine from '../../utils/horizontal_line';
import { Form } from 'react-bootstrap';
import loginAPI from '../../service/API/auth/login';
import axios from 'axios';

// 입력창
export function Input(props) {
    const { type, placeholder, name, onChange } = props;

    return (
        <div className="mb-3">
            <Form.Group>
                <Form.Control type={type} name={name} placeholder={placeholder} onChange={onChange} />
            </Form.Group>
        </div>
    );
}

export function Login(props) {
    const { formData, setFormData } = props;

    // put input value in formdata func
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/images/pitapet_dog_rmbg.png'} alt={"강아지 그림"} width='75px' />
            <h3 className="mb-4">로그인</h3>
            <Input type="email" name="email" placeholder="이메일을 입력하세요"
                onChange={(event) => { handleChange(event) }}
            />
            <Input type="password" name="password" placeholder="비밀번호를 입력하세요"
                onChange={(event) => { handleChange(event) }}
            />

            <div className="d-flex justify-content-between mb-4">
                <div className='d-flex login-keep-box'>
                    <input type="checkbox" className='checkbox' />
                    로그인 유지
                </div>
                <Link to={"/findpwd"} className="findpwd-link">
                    비밀번호 찾기
                </Link>
            </div>

            {/* 로그인 버튼 클릭 시 토큰 발급 */}
            <button type="submit" className="w-100 btn-lg mb-4 loginBtn" onClick={event => {
                loginAPI(event, formData)
            }}>
                이메일로 로그인
            </button>
        </div>
    )
}

export function JoinFind() {
    return (
        <div className='mx-auto mb-4 vr-form' style={{ width: '30%' }}>
            <Link to={"/signup"} className="sign-link">
                회원가입
            </Link>
            <div className="vr" />
            <Link to={"/findid"} className="sign-link">
                이메일 찾기
            </Link>
        </div>
    );
}


// 네이버 카카오 간편 로그인
export function EasyLogin() {
    const [didMount, setDidMount] = useState(false);

    //naver 로그인
    var client_id = process.env.REACT_APP_NAVER_ID;
    var state = process.env.REACT_APP_NAVER_STATE;
    var redirectURI = encodeURI("http://localhost:3000/login");
    var api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;

    const NaverLogin = (event) => {
        window.location.href = api_url;
    };

    const NaverLogin_redirect = async (code_state) => {
        if (didMount) {
            try {
                const response = await axios.get('http://43.202.64.233:3000/api/user/naver/callback' + code_state, { timeout: 3000 });
                console.log(response);
            } catch (err) {
                alert('인증에 실패했습니다. 고객센터로 문의해주세요.');
                console.log(err);
            }
        }
        setDidMount(false);

    }

    useEffect(()=>{
        setDidMount(true);
    },[])

    // redirect가 완료된 경우
    useEffect(() => {
        console.log(window.location.search);
        if (didMount && window.location.search.length > 0) {
            const code_state = window.location.search;
            NaverLogin_redirect(code_state);
        }
    }, [didMount]);


    return (
        <div className="text-center">
            <HorizonLine text="간편 로그인" />
            <div className='justify-content-between mt-4'>
                <a className='mx-3' onClick={NaverLogin}>
                    <img height='30' src='http://static.nid.naver.com/oauth/small_g_in.PNG' alt='네이버로그인' />
                </a>
                <a id="login_kakao" href="/" className='mx-3'>
                    <img src={process.env.PUBLIC_URL + '/images/btn_kakao.png'} alt={'카카오 로그인'} height="30" />
                </a>
            </div>
        </div>
    );
}