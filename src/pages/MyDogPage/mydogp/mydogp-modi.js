import React, { useState } from "react";
import './mydogp-modi.css';
import { Modal, Button, Form, Container } from "react-bootstrap";
import { GenderSelection, DatePickerField } from "../../../components/MyDogPage/mydogp";
import 'react-datepicker/dist/react-datepicker.css';

{/* 팝업창 전체 */}
export function Mypuppymodi (props) {
    const { show, onHide } = props;
    const dropAreaId = "drop-file";
    const fileListId = "files";
    const [birthDate, setBirthDate] = useState(null);
  
    const handleModalScroll = (event) => {
      event.stopPropagation();
    };
  
    const handleBirthDateChange = (date) => {
      setBirthDate(date);
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

            {/* 강아지 이미지 */}
            <img className='mypuppymrimg' src={process.env.PUBLIC_URL + '/images/mypuppym_image1.png'} alt={'Mypuppyimg1'} />
              
            {/* 이미지 삽입 버튼 */}
            <label class="file-label" for="chooseFile">Choose File</label>
            <input class="file" id="chooseFile"
              type="file" 
              onchange="dropFile.handleFiles(this.files)"
              accept="image/png, image/jpeg, image/gif"
            ></input>
  
            {/* 입력 리스트 */}
            <Form className="popuplist">
              <Form.Group className="puppynamep">
                <Form.Label>강아지 이름</Form.Label>
                <label className='starp'>*</label>
                <Form.Control className="listinputp" />
              </Form.Group>
              
              <Form.Group className="puppydatep">
                <Form.Label>생일</Form.Label>
                <label className='starpp'>*</label>
                <Form.Label>가족이 된 날</Form.Label>
                <label className='starp'>*</label>
                <p></p>
                <div className="datepick">
                  <DatePickerField className="pickbirth" selectedDate={birthDate} onChange={handleBirthDateChange} />
                  <DatePickerField className="pickfamily" selectedDate={birthDate} onChange={handleBirthDateChange} />
                </div>
              </Form.Group>
  
              <Form.Group className="puppytypep">
                <Form.Label>견종</Form.Label>
                <label className='starp'>*</label>
                <Form.Control className="listinputp" />
              </Form.Group>
              
              <GenderSelection />
  
              <Form.Group className="puppycharp">
                <Form.Label>특징</Form.Label>
                <Form.Control className="listinputp" />
              </Form.Group>
              
              <Form.Group className="puppyspecp">
                <Form.Label>특기</Form.Label>
                <Form.Control className="listinputp" />
              </Form.Group>
  
              <Form.Group className="puppyplayp">
                <Form.Label>좋아하는 놀이</Form.Label>
                <Form.Control className="listinputp" />
              </Form.Group>
              
              <Form.Group className="puppysnackp">
                <Form.Label>좋아하는 간식</Form.Label>
                <Form.Control className="listinputp" />
              </Form.Group>
              
              <Form.Group className="puppysickp">
                <Form.Label>질환</Form.Label>
                <Form.Control className="listinputp" />
              </Form.Group>
  
              <div className="button-container">
                <Button block variant="info" type="button" className="my-5 cancleBtnp">
                    취 소 하 기
                </Button>
                <Button block variant="info" type="button" className="my-5 saveBtnp">
                    저 장 하 기
                </Button>
              </div>
            </Form>
            </div>
          </Modal.Body>
        </Container>
      </Modal>
    );
  };
  
  export default Mypuppymodi;