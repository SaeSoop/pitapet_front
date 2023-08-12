import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Login, JoinFind, EasyLogin } from '../../../components/Authpage/login';

import {
  Form,
  Container,
} from 'react-bootstrap';

function LogIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // 로그인 버튼 클릭 시 호출
  const loginHandler = (e)=>{
      e.preventDefault();
      setEmail(email);
      setPassword(password);
  }

  return (
    <Container className="d-flex flex-column">
      <Form className='form-body'> 

        {/* 로그인 */}
        <Login
          setEmail={setEmail}
          setPassword={setPassword}
          loginHandler={loginHandler}
        />

        {/* 회원가입 및 이메일 찾기 */}
        <JoinFind></JoinFind>

        {/* 간편 로그인 */}
        <EasyLogin></EasyLogin>
      </Form>
    </Container>
  );
}

export default LogIn;