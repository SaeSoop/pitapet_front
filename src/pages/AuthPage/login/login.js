import React from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Login, JoinFind, EasyLogin } from '../../../components/Authpage/login';

import {
  Form,
  Container,
} from 'react-bootstrap';


function LogIn() {

  const [formData, setFormData] = React.useState({
    email:"",
    password:""
  });

  return (
    <Container className="d-flex flex-column">
      <Form className='form-body'> 

        {/* 로그인 */}
        <Login
          formData={formData}
          setFormData={setFormData}
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