import React from 'react';
import { Link } from "react-router-dom";
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import HorizonLine from '../../../utils/horizontal_line.js';

import {
  Form,
  Container,
  Col
} from 'react-bootstrap';


function LogIn() {

  // const [state, setState] = React.useState({
  //   email: "",
  //   password: ""
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

  //   const { email, password } = state;
  //   alert(`You are login with email: ${email} and password: ${password}`);

  //   for (const key in state) {
  //     setState({
  //       ...state,
  //       [key]: ""
  //     });
  //   }
  // };

  return (

    <Container className="d-flex flex-column">
      <Form className='form-body'>    
        <Col>
          <img src={process.env.PUBLIC_URL + '/pitapet_dog_rmbg.png'}  alt={"강아지 그림"} width = '75px'/>
          <h1 class="h3 mb-4 fw-normal">로그인</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="이메일을 입력하세요" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
          </Form.Group>
        </Col>

        <div className="d-flex justify-content-between mb-4">
          <div className='d-flex login-keep-box'>
            <input type="checkbox" className='checkbox' />
              로그인 유지
          </div>
          <Link to={"/findpwd"} className="findpwd-link">
            비밀번호 찾기
          </Link>
        </div>

        <button type="submit" className="w-100 btn-lg mb-4 loginBtn">
          이메일로 로그인
        </button>

        <div className='mx-auto mb-4 vr-form' style={{ width: '30%' }}>
          <Link to={"/signup"} className="sign-link">
            회원가입
          </Link>
          <div className="vr" />
          <Link to={"/findid"} className="sign-link">
            이메일 찾기
          </Link>
        </div>

        <div className="text-center">
          <HorizonLine text="간편 로그인" />
          <div className='justify-content-between mt-4'>
            <a id="login_naver" href="#" className='mx-3'>
              <img src={process.env.PUBLIC_URL + '/btn_naver.png'} alt={'네이버 로그인'} height="30" />
            </a>
            <a id="login_kakao" href="#" className='mx-3'>
              <img src={process.env.PUBLIC_URL + '/btn_kakao.png'} alt={'카카오 로그인'} height="30" />
            </a>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default LogIn;