import React from 'react';
import '../../../src/pages/MyPage/mypart.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

export function Mypageprofile(props) {
    return (
        <div className="mypageprofile">
            <img className='myprofileimg' src={process.env.PUBLIC_URL + '/images/mypage_profileimg.jpg'} alt={'프로필 사진'} />
            <div className='myprofilemodi'>
                <button className='profile_add'>등록</button>
                <button className='profile_del'>삭제</button>
                <br />
                <label>정사각형 비율의 이미지 등록을 권장합니다.</label>
                <br />
                <label>사이즈에 따라 자동으로 리사이징 되어 등록됩니다.</label>
            </div>
        </div>
    );
}

/* diary1, diary2, picture1, pircture2 */
export function Squarebox1(props) {
    const { myvalue } = props;
    return (
        <div className='mypagebox'>
            <div className='mypagevalue'>
                <label>작성한 일기</label> <br />
               {/* <label className='mypagenumber' id="diary1">{props}개</label> */}
               <label className='mypagenumber' id="diary1">55개</label>
            </div>
        </div>
    )
}
export function Squarebox2(props) {
    const { myvalue } = props;
    return (
        <div className='mypagebox'>
            <div className='mypagevalue'>
                <label>평균 작성 주기</label> <br />
                <label className='mypagenumber' id="diary1">일주일</label>
            </div>
        </div>
    )
}
export function Squarebox3(props) {
    const { myvalue } = props;
    return (
        <div className='mypagebox'>
            <div className='mypagevalue'>
                <label>등록한 사진</label> <br />
                <label className='mypagenumber' id="diary1">25개</label>
            </div>
        </div>
    )
}
export function Squarebox4(props) {
    const { myvalue } = props;
    return (
        <div className='mypagebox'>
            <div className='mypagevalue'>
                <label>총 좋아요 수</label> <br />
                <label className='mypagenumber' id="diary1">23개</label>
            </div>
        </div>
    )
}

export function MypageInfo(props) {
    const { title, type, id, placehodler, mode } = props;

    return (
        <div className="form-group myinfo-input">
            <tr>
                <label>{title}</label>
                <input type={type} name={id} placeholder={placehodler} readonly/>
            </tr>
        </div>
    );
}

export function MypageGender(props) {
    return (
        <div className="form-group myinfo-gender">
            <div label className="gender-label">성별</div>
            <div className='gender-check'>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sex" id="sex-1" value="option" />
                    <label className="form-check-label mx-1">남자</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sex" id="sex-2" value="option" />
                    <label className="form-check-label mx-1">여자</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="sex" id="sex-3" value="option" />
                    <label className="form-check-label mx-1">선택안함</label>
                </div>
            </div>
        </div>
    );
}