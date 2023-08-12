import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../pages/AuthPage/join/join.css';
import 'bootstrap/dist/css/bootstrap.css';

export function Input(props) {
    //props
    const { title, type, id, placehodler, mode } = props;
    const { formData, setFormData } = props;

    //Input값이 변경될 경우 State 처리
    //유저 정보
    const handleChange = (event) => {
        // 성별 처리
        if (event.target.id === "gender-1") {
            setFormData({ ...formData, ["gender"]: '1' });
        }
        else if (event.target.id === "gender-2") {
            setFormData({ ...formData, ["gender"]: '2' });
        }
        else if (event.target.id === "gender-3") {
            setFormData({ ...formData, ["gender"]: '3' });
        } 
        // 성별 제외 나머지 처리
        else {
            const { name, value } = event.target;
            setFormData({ ...formData, [name]: value });
        }
    };

    // 성별
    if (mode === "gender") {
        return (
            <div className="form-group">
                <div label className="gender-label">성별</div>
                <div className='gender-check'>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender-1" value="option" onClick={handleChange} />
                        <label className="form-check-label mx-1">남자</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender-2" value="option" onClick={handleChange} />
                        <label className="form-check-label mx-1">여자</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="gender-3" value="option" onClick={handleChange} />
                        <label className="form-check-label mx-1">선택안함</label>
                    </div>
                </div>
            </div>
        );
    }
    // 성별 제외 리턴
    return (
        <div className="form-group input-line input-text">
            <tr>
                <label>{title}</label>
                <label className='star'>*</label>
                <input type={type} name={id} placeholder={placehodler} onChange={event => {
                    handleChange(event);
                }} />


            </tr>
        </div>
    );
}

export function Agree(props) {
    //params
    const { formData, setFormData } = props;

    // 약관 동의
    const handleCheck = (event) => {
        if (event.target.name === "AgreeAll") {
            setFormData({ ...formData, ["agreeUse"]: true, ["agreePriv"]: true });
        } else {
            const { name, checked } = event.target;
            setFormData({ ...formData, [name]: checked });
        }

    };

    return (
        <div>
            <tr>
                이용약관 동의
                <label className='star'>*</label>

            </tr>

            <div className="form-group agree-total">
                <input type="radio" name="AgreeAll" id="a-radio2" onClick={handleCheck} />
                <label>전체 동의합니다</label>
                <div className="row agree-ex-txt">
                    <tr>선택 항목에 동의하지 않은 경우 회원가입 및 일반적인 서비스를 사용할 수 없습니다</tr>
                </div>
            </div>
            <div className="form-group row agree-more">
                <Link to={"/terms1"} className="terms1-link">
                    약관보기&#62;
                </Link>
                <Link to={"/terms2"} className="terms2-link">
                    약관보기&#62;
                </Link>
            </div>

            <div className="row agree-nece">
                <div className="form-group agree-use">
                    <input type="radio" name="agreeUse" id="a-radio2" onClick={handleCheck} />
                    <label>이용약관 동의</label><tr>(필수)</tr>
                </div>
                <div className="form-group agree-priv">
                    <input type="radio" name="agreePriv" id="a-radio2" onClick={handleCheck} />
                    <label>개인정보 수집 이용 및 동의</label><tr>(필수)</tr>
                </div>
            </div>
        </div>
    )
}
