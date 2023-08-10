import React from 'react';
import { Link } from "react-router-dom";
import '../../pages/AuthPage/join/join.css';
import 'bootstrap/dist/css/bootstrap.css';

export function Checkrad(props) {
    return (
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="genderselect" id="gender" value="option" />
            <label className="form-check-label mx-1">{props.title}</label>
        </div>
    )
}

export function Input(props) {
    const { type, id, placehodler, mode } = props;
    if (mode === "gender") {
        return (
            <div className="form-group">
                <div label className="gender-label">성별</div>
                <div className='gender-check'>
                    <Checkrad title="남자"></Checkrad>
                    <Checkrad title="여자"></Checkrad>
                    <Checkrad title="선택안함"></Checkrad>
                </div>
            </div>
        );
    }
    return (
        <div className="form-group input-line input-text">
            <tr>
                <label>{props.title}</label>
                <label className='star'>*</label>
                <input type={type} id={id} placeholder={placehodler} />

            </tr>
        </div>
    );
}

export function Agree(props) {
    return (
        <div>
            <tr>
                이용약관 동의
                <label className='star'>*</label>

            </tr>

            <div className="form-group agree-total">
                <input type="radio" id="a-radio2" />
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
                    <input type="radio" id="a-radio2" />
                    <label>이용약관 동의</label><tr>(필수)</tr>
                </div>
                <div className="form-group agree-priv">
                    <input type="radio" id="a-radio2" />
                    <label>개인정보 수집 이용 및 동의</label><tr>(필수)</tr>
                </div>
            </div>
        </div>
    )
}