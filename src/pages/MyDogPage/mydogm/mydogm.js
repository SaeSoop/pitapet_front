import React, { useState } from 'react';
import { Mypuppytitle, Mypuppylist1, Mypuppylist2, Banner } from '../../../components/MyDogPage/mydogm';
import './mydogm.css';
import 'bootstrap/dist/css/bootstrap.css';
import MypuppyReg from '../../../components/MyDogPage/mydogp';
import Mypuppymore from '../mydogp/mydogp-more';
import Mypuppymodi from '../mydogp/mydogp-modi';
import { Button } from 'reactstrap';

function Mydogm() {
    const [MypuppyRegOn, setMypuppyRegOn] = useState(false);

    return ( 
        <>
        <Mypuppymore // 등록하기 누르면 뜨는 창 function -- 원래 MypuppyReg
          show={MypuppyRegOn}
          onHide={() => setMypuppyRegOn(false)}
        />
          <form className='form-horizontal' >
              {/* title */}
              <h1 className="title">
                  <Mypuppytitle />
              </h1>
 
              {/* 강아지 프로필 */}
              <div className="mypuppy-container">
                <div className='mainlist'>
                  <Banner />
                </div>
              </div>

              {/* 등록하기 버튼 */}
              <div className="regBtn" type="submit">
                <Button className='regBtn'
                  variant="secondary"
                  onClick={() => setMypuppyRegOn(true)}
                >
                  등 록 하 기
                </Button>
              </div>
          </form>
          </>
    );
}

export default Mydogm;