import React, { useState } from 'react';
import { Mypuppytitle, Mypuppylist } from '../../../components/MyDogPage/mydogm';
import Popup from "../../../components/MyDogPage/mydogp"
import './mydogm.css';
import 'bootstrap/dist/css/bootstrap.css';
import MypuppyReg from '../../../components/MyDogPage/mydogp';
import { Input, Agree } from '../../../components/Authpage/join';
import { Button } from 'reactstrap';
import { joinAPI, isExist } from '../../../service/API/auth/join';

function Join() {
    const [MypuppyRegOn, setMypuppyRegOn] = useState(false);
    return ( 
        <>
        <MypuppyReg
          show={MypuppyRegOn}
          onHide={() => setMypuppyRegOn(false)}
        />
          <form className='form-horizontal' >
              {/* title */}
              <h1 className="title">
                  <Mypuppytitle />
              </h1>
 
              {/* 강아지 프로필 */}
              <Mypuppylist />
  
              {/* 등록하기 버튼 */}
              <div className="regBtn" type="submit">
                  <Button className='regBtn'
                    variant="secondary"
                    onClick={() => setMypuppyRegOn(true)}
                  >
                    Sign Up
                  </Button>
                </div>
          </form>
          </>
    );
}

export default Join;