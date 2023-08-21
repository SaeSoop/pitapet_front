import React, { useState, useRef } from "react";
import '../../pages/MyDogPage/mydogp/mydogp.css';
import { Modal, Button, Form, Container } from "react-bootstrap";

export function GenderSelection() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Form.Group className="puppygender">
      <Form.Label>성별</Form.Label>
      <label className='starp'>*</label>
      <h1></h1>
      <div className="genderbackground">
        <div className="genderradiop">
          <input
            className="genderinputp"
            type="radio"
            name="gender"
            id="gender-1"
            value="딸"
            checked={selectedOption === '딸'}
            onChange={handleChange}
          />
          <span>딸</span>
          <input
            className="genderinputp"
            type="radio"
            name="gender"
            id="gender-2"
            value="아들"
            checked={selectedOption === '아들'}
            onChange={handleChange}
          />
          <span>아들</span>
        </div>
      </div>
      <div className="genderLabelContainer">
        <Form.Check
          className="gendersecretbox"
          type="checkbox"
          name="gender"
          id="gender-3"
          value="중성화"
          checked={selectedOption === '중성화'}
          onChange={handleChange}
        />
        <Form.Label htmlFor="gender-3" className="genderLabel">
          중성화
        </Form.Label>
      </div>
    </Form.Group>
  );
}

function DropFile(dropAreaRef, fileListId) {
  const fileList = document.getElementById(fileListId);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(e) {
    preventDefaults(e);
    dropAreaRef.current.classList.add("highlight");
  }

  function unhighlight(e) {
    preventDefaults(e);
    dropAreaRef.current.classList.remove("highlight");
  }

  function handleDrop(e) {
    unhighlight(e);
    const dt = e.dataTransfer;
    const files = dt.files;

    handleFiles(files);

    if (fileList) {
      fileList.scrollTo({ top: fileList.scrollHeight });
    }
  }

  function handleFiles(files) {
    files = [...files];
    // files.forEach(uploadFile);
    files.forEach(previewFile);
  }

  function previewFile(file) {
    console.log(file);
    renderFile(file);
  }

  function renderFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      const img = dropAreaRef.current.getElementsByClassName("preview")[0];
      img.src = reader.result;
      img.style.display = "block";
    };
  }

  dropAreaRef.current.addEventListener("dragenter", highlight, false);
  dropAreaRef.current.addEventListener("dragover", highlight, false);
  dropAreaRef.current.addEventListener("dragleave", unhighlight, false);
  dropAreaRef.current.addEventListener("drop", handleDrop, false);

  return {
    handleFiles
  };
}

export function MypuppyReg (props) {
    const { show, onHide } = props;
    const dropAreaRef = useRef(null);
    const dropFile = DropFile("drop-file", "files");

    const handleModalScroll = (event) => {
      event.stopPropagation();
    };
    const handleFileChange = (e) => {
      dropFile.handleFiles(e.target.files);
    };

  return (
    <Modal className="mydogpopup"
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
          {/* 이미지 미리보기 박스 (드래그 가능) */}  
          <div className="upload-box">
            <div id="drop-file" class="drag-file">
                <img src="https://img.icons8.com/pastel-glyph/2x/image-file.png" alt="파일 아이콘" class="image"/>
                <p class="message">이미지 드래그</p>
                <img src="" alt="미리보기 이미지" class="preview"/>
            </div>
          </div>

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
            
            <Form.Group className="puppytypep">
              <Form.Label>생일</Form.Label>
              <label className='starp'>*</label>
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
            
            <Form.Group>
            <Form.Label>특기</Form.Label>
            <Form.Control className="listinputp" />
            </Form.Group>

            <Form.Group>
            <Form.Label>좋아하는 놀이</Form.Label>
            <Form.Control className="listinputp" />
            </Form.Group>
            
            <Form.Group>
            <Form.Label>좋아하는 간식</Form.Label>
            <Form.Control className="listinputp" />
            </Form.Group>
            
            <Form.Group>
            <Form.Label>질환</Form.Label>
            <Form.Control className="listinputp" />
            </Form.Group>

            <Button block variant="info" type="button" className="my-5 signBtnp">
              등 록 하 기
            </Button>
          </Form>
          </div>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default MypuppyReg;