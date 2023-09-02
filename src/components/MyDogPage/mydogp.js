import React, { useState } from "react";
import "../../pages/MyDogPage/mydogp/mydogp.css";
import { Modal, Button, Form, Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import createAPI from "../../service/API/my_puppy/puppy_create";

{
  /* 성별 선택 컴포넌트 */
}
export function GenderSelection({ selectedOption, onChange }) {
  const [MypuppyRegOn, setMypuppyRegOn] = useState(false);

  //const [selectedOption, setSelectedOption] = useState(null);

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

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
            onChange={onChange}
          />
          <span>딸</span>
          <input
            className="genderinputp"
            type="radio"
            name="gender"
            id="gender-2"
            value="아들"
            checked={selectedOption === '아들'}
            onChange={onChange}
            
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
          onChange={onChange}
        />
        <Form.Label htmlFor="gender-3" className="genderLabel">
          중성화
        </Form.Label>
      </div>
    </Form.Group>
  );

}

{
  /* 날짜 선택 컴포넌트 */
}
export function DatePickerField({ selectedDate, onChange }) {
  const customStyles = {
    selected: {
      backgroundColor: "black",
    },
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => onChange(date)}
      dateFormat="yyyy-MM-dd"
      className="form-control"
    />
  );
}

{
  /* 팝업창 전체 */
}
export function MypuppyReg(props) {
  //const { dog_image, dog_name, dog_birth, dog_family, dog_breed, dog_sex, dog_ability, dog_char, dog_game, dog_snack, dog_illness} = props
  //setFormData({"dog_image":dog_image, "dog_name":dog_name, "dog_birth":dog_birth, "dog_family":dog_family, "dog_breed":dog_breed, "dog_sex":dog_sex, "dog_ability":dog_ability, "dog_char":dog_char, "dog_game":dog_game, "dog_snack":dog_snack, "dog_illness":dog_illness});
  const { title, type, id, placehodler, mode } = props;
  //const { formData, setFormData } = props;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, profile: file });
  };

  const [formData, setFormData] = useState({
    profile: "",
    dog_name: "",
    dog_birth: "",
    dog_family: "",
    dog_breed: "",
    dog_sex: 0,
    dog_ability: "",
    dog_char: "",
    dog_game: "",
    dog_snack: "",
    dog_illness: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //console.log('name', name);
    //console.log('value', value);
    setFormData({ ...formData, [name]: value });
  };

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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleGenderChange = (event) => {
    setSelectedOption(event.target.value);
    //console.log(setSelectedOption);
  };

  return (
    <Modal
      className="mydogpop"
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
                <img
                  src="https://img.icons8.com/pastel-glyph/2x/image-file.png"
                  alt="파일 아이콘"
                  class="image"
                />
                <p class="message">이미지 드래그</p>
                <img src="" alt="미리보기 이미지" class="preview" />
              </div>
            </div>

            {/* 이미지 삽입 버튼 */}
            <label class="file-label" for="chooseFile">
              Choose File
            </label>
            <input
              class="file"
              id="chooseFile"
              type="file"
              //onchange="dropFile.handleFiles(this.files)"
              accept="image/png, image/jpeg, image/gif"
              name="profile"
              formData={formData}
              onChange={handleFileChange}
            ></input>

            {/* 입력 리스트 */}
            <Form className="popuplist">
              <Form.Group className="puppynamep">
                <Form.Label>강아지 이름</Form.Label>
                <label className="starp">*</label>
                <Form.Control
                  className="listinputp"
                  //value={formData.dog_name} // formData의 dog_name과 연결
                  //onChange={handleInputChange} // 변경 이벤트 핸들러 연결
                  name="dog_name"
                  formData={formData}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="puppydatep">
                <Form.Label>생일</Form.Label>
                <label className="starpp">*</label>
                <Form.Label>가족이 된 날</Form.Label>
                <label className="starp">*</label>
                <p></p>
                <div className="datepick">
                  <DatePickerField
                    className="pickbirth"
                    selectedDate={birthDate}
                    onChange={handleBirthDateChange}
                    name="dog_birth"
                  />
                  <DatePickerField
                    className="pickfamily"
                    selectedDate={birthDate}
                    onChange={handleBirthDateChange}
                    name="dog_family"
                  />
                </div>
              </Form.Group>

              <Form.Group className="puppytypep">
                <Form.Label>견종</Form.Label>
                <label className="starp">*</label>
                <Form.Control
                  className="listinputp"
                  name="dog_breed"
                  formData={formData}
                  onChange={handleChange}
                />
              </Form.Group>

              <GenderSelection selectedOption={selectedOption} onChange={handleGenderChange} />

              <Form.Group className="puppycharp">
                <Form.Label>특징</Form.Label>
                <Form.Control
                  className="listinputp"
                  name="dog_char"
                  formData={formData}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="puppyspecp">
                <Form.Label>특기</Form.Label>
                <Form.Control
                  className="listinputp"
                  name="dog_ability"
                  formData={formData}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="puppyplayp">
                <Form.Label>좋아하는 놀이</Form.Label>
                <Form.Control
                  className="listinputp"
                  name="dog_game"
                  formData={formData}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="puppysnackp">
                <Form.Label>좋아하는 간식</Form.Label>
                <Form.Control
                  className="listinputp"
                  name="dog_snack"
                  formData={formData}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="puppysickp">
                <Form.Label>질환</Form.Label>
                <Form.Control
                  className="listinputp"
                  name="dog_illness"
                  formData={formData}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button
                block
                variant="info"
                onClick={(event) => {
                  createAPI(event, formData, birthDate, selectedOption);
                }}
                type="button"
                className="my-5 signBtnp"
              >
                등 록 하 기
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Container>
    </Modal>
  );
}

export default MypuppyReg;
