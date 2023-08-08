import React from 'react';
import { Link } from "react-router-dom";
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import HorizonLine from '../../../utils/horizontal_line';

import {
  Form,
  Container,
  Col
} from 'react-bootstrap';

function LogIn() {

  //naver 로그인
  var client_id = process.env.REACT_APP_NAVER_ID;
  var state = process.env.REACT_APP_NAVER_STATE;
  var redirectURI = encodeURI("http://43.202.64.233:3000/api/user/naver/callback");
  var api_url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirectURI + '&state=' + state;

  return (

    <Container className="d-flex flex-column">
      <Form className='form-body'>

        {/* 로그인 */}
        <Col>
          <img src={process.env.PUBLIC_URL + '/images/pitapet_dog_rmbg.png'} alt={"강아지 그림"} width='75px' />
          <h1 className="h3 mb-4 fw-normal">로그인</h1>
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

        {/* 로그인 외 */}
        <div className='mx-auto mb-4 vr-form' style={{ width: '30%' }}>
          <Link to={"/signup"} className="sign-link">
            회원가입
          </Link>
          <div className="vr" />
          <Link to={"/findid"} className="sign-link">
            이메일 찾기
          </Link>
        </div>

        {/* 간편 로그인 */}
        <div className="text-center">
          <HorizonLine text="간편 로그인" />
          <div className='justify-content-between mt-4'>
            <a className='mx-3' href={api_url}>
              <img height='30' src='http://static.nid.naver.com/oauth/small_g_in.PNG' alt='네이버로그인' />
            </a>
            <a id="login_kakao" href="/" className='mx-3'>
              <img src={process.env.PUBLIC_URL + '/images/btn_kakao.png'} alt={'카카오 로그인'} height="30" />
            </a>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default LogIn;