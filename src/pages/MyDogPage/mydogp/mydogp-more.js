import React from 'react';
import { Modal, Button, Form, Container } from 'reactstrap';
import '../mydogp/mydogp-more.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MymoreImg } from '../../../components/MyDogPage/mydog-more';

/* 타이틀 */
export function Mypuppymore(props) {
    const { show, onHide } = props;
  
    const handleModalScroll = (event) => {
      event.stopPropagation();
    };
  
    return (
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
            <div className="scrollable-content" onWheel={handleModalScroll}>
            
            {/* <img src={process.env.PUBLIC_URL + '/images/mypuppym_image1.png'} alt={'내강아지 상세보기'} />
            <MymoreImg Year="2022" Month="3" Day="22" 
    puppyname="강아지" puppygender="아들" puppytype="닥스훈트" /> */}
  
            {/* 프로필 리스트 */}
            <Form className="popuplist">
              <Form.Group className="morebirth">
                <Form.Label>생일</Form.Label>
                <label>2003.02.26</label>
              </Form.Group>
              
              <Form.Group className="morespec">
                <Form.Label>특기</Form.Label>
                <label>빵야, 인사, 돌기, 코, 브이, 뽀뽀</label>
              </Form.Group>
              
              <Form.Group className="morechar">
                <Form.Label>특징</Form.Label>
                <label>다리가 길다, 왕티즈</label>
              </Form.Group>
              
              <Form.Group className="moreplay">
                <Form.Label>좋아하는 놀이</Form.Label>
                <label>터그 놀이, 산책, 공놀이</label>
              </Form.Group>
  
              <Form.Group className="moresnack">
                <Form.Label>좋아하는 간식</Form.Label>
                <label>연어, 우유껌, 북어포</label>
              </Form.Group>
  
              <Form.Group className="moresick">
                <Form.Label>질환</Form.Label>
                <label>슬개골 탈구, 닭고기 알레르기</label>
              </Form.Group>
  
              <Button block variant="info" type="button" className="my-5 signBtnp">
                수 정 하 기
              </Button>
            </Form>
            </div>
          </Modal.Body>
        </Container>
      </Modal>
    );
}

export default Mypuppymore;