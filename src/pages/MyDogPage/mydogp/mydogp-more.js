import React, { useState } from "react";
import './mydogp-more.css';
import { Modal, Button, Form, Container } from "react-bootstrap";
import { MymoreImg } from "../../../components/MyDogPage/mydogp-more";
import 'react-datepicker/dist/react-datepicker.css';



{/* 팝업창 전체 */}
export function Mypuppymore (props) {
    const [MypuppyModiOn, setMypuppyModiOn] = useState(false);
    const { show, onHide } = props;
  
    const handleModalScroll = (event) => {
      event.stopPropagation();
    };
  
    return (
        <>
        <Mypuppymore // 등록하기 누르면 뜨는 창 function -- 원래 MypuppyReg
          show={MypuppyModiOn}
          onHide={() => setMypuppyModiOn(false)}
        />
        <Modal className="mydogpop"
            show={show}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Container>
          <Modal.Header closeButton />
          <Modal.Body closeButton>
            <div className="scrollable-content morepop" onWheel={handleModalScroll}>
            
            {/* 강아지 이미지 */}
            <img className='mypuppymrimg' src={process.env.PUBLIC_URL + '/images/mypuppym_image1.png'} alt={'Mypuppyimg1'} />
              
            {/* 입력 리스트 */}
            <Form className="popuplist">
              <MymoreImg puppyname="초코" puppygender="아들" puppytype="닥스훈트" />

              <Form.Group className="puppydatemr">
                <label className="listname">생일</label>
                <label className="listanswer">2003.02.26</label>
              </Form.Group>
  
              <Form.Group className="puppyspecmr">
                <label className="listname">특기</label>
                <label className="listanswer">빵야, 인사, 돌기, 코, 브이, 뽀뽀</label>
              </Form.Group>
              
              <Form.Group className="puppycharmr">
                <label className="listname">특징</label>
                <label className="listanswer">다리가 길다, 왕티즈</label>
              </Form.Group>
              
              <Form.Group className="puppyplaymr">
                <label className="listname">좋아하는 놀이</label>
                <label className="listanswer">터그 놀이, 산책, 공놀이</label>
              </Form.Group>
  
              <Form.Group className="puppysnackmr">
                <label className="listname">좋아하는 간식</label>
                <label className="listanswer">연어, 우유껌, 북어포</label>
              </Form.Group>
              
              <Form.Group className="puppysickmr">
                <label className="listname">질환</label>
                <label className="listanswer">슬개골 탈구, 닭고기 알레르기</label>
              </Form.Group>
              
              <div className="modiBtnp" type="submit">
                <Button className='modiBtnp'
                  variant="secondary"
                  onClick={() => setMypuppyModiOn(true)}
                >
                  수 정 하 기
                </Button>
              </div>

            </Form>
            </div>
          </Modal.Body>
        </Container>
      </Modal>
      </>
    );
  };
  
  export default Mypuppymore;