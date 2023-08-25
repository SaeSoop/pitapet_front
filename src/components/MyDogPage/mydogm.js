import React, { useRef, useState } from 'react';
import '../../../src/pages/MyDogPage/mydogm/mydogm.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

/* 타이틀 */
export function Mypuppytitle(props) {
    return(
        <div className='mypuppytitle'>
            <label className='mypuppytxt'>My Puppy</label>
            <img src={process.env.PUBLIC_URL + '/images/mypuppym_footprints.png'} alt={'타이틀 발자국'} />
        </div>
    )
}

/* 강아지 프로필 하나 -- 배너 만든 거 확인용으로 2개 만들어둠. */
export function Mypuppyinfo1(props) {
    return (
        <div className="mypuppyprofile">
            <img className='mypuppyimg1' src={process.env.PUBLIC_URL + '/images/mypuppym_image1.png'} alt={'Mypuppyimg1'} />
            <div className='mypuppyunder'>
                <img src={process.env.PUBLIC_URL + '/images/mypuppym_bone.png'} alt={'BoneLeft'} />
                <label className='mypuppytxt'>{props.pname} ({props.age}/{props.gender})</label>
                <img src={process.env.PUBLIC_URL + '/images/mypuppym_bone.png'} alt={'BoneRight'} />
            </div>
        </div>
    );
}
export function Mypuppyinfo2(props) {
    return (
        <div className="mypuppyprofile">
            <img className='mypuppyimg2' src={process.env.PUBLIC_URL + '/images/mypuppym_image2.png'} alt={'Mypuppyimg1'} />
            <div className='mypuppyunder'>
                <img src={process.env.PUBLIC_URL + '/images/mypuppym_bone.png'} alt={'BoneLeft'} />
                <label className='mypuppytxt'>{props.pname} ({props.age}/{props.gender})</label>
                <img src={process.env.PUBLIC_URL + '/images/mypuppym_bone.png'} alt={'BoneRight'} />
            </div>
        </div>
    );
}

export const PuppyList = async (props) => {
    // 객채의 id를 ref로 사용한다.
    const nextId = useRef(1);

    // 강아지 정보를 담는 List
    const [userList, setResult] = useState([]);

    // 입력 필드 상태 관리
    const [text, setText] = useState({
        id: nextId.current,
        nickname: "",
        realname: "",
        isActive: false,
    });

    const [puppy, setPuppy] = useState({
        email: '',
        email_check: false,
        password: '',
        password_check: '',
        pnumber: '',
        name: '',
        sex: '',
        birth: '',
        agreeUse: false,
        agreePriv: false,
    });

    // 추가 기능 구현 부분
    // ...

    // 수정 기능 구현 부분
    // ...

    // 삭제 기능 구현 부분
    // ...

    // 반환되는 JSX가 없는 경우 null 반환
    return null;
}



/* Mypuppyinfo 4개 세트 */
export function Mypuppylist1(props) {
    return (
        <div classname="mypuppyset" style={{display: 'flex', gap: '70px'} }>
            <Mypuppyinfo1 pname={"모리"} age={"1살"} gender={"남"}/>
            <Mypuppyinfo1 pname={"까미"} age={"2살"} gender={"여"}/>
            <Mypuppyinfo1 pname={"기름이"} age={"3살"} gender={"여"}/>
            <Mypuppyinfo1 pname={"우유"} age={"1살"} gender={"남"}/>
        </div>
    )
}
export function Mypuppylist2(props) {
    return (
        <div classname="mypuppyset" style={{display: 'flex', gap: '70px'} }>
            <Mypuppyinfo2 pname={"루시"} age={"2살"} gender={"여"}/>
            <Mypuppyinfo2 pname={"루나"} age={"1살"} gender={"남"}/>
            <Mypuppyinfo2 pname={"루크"} age={"2살"} gender={"여"}/>
            <Mypuppyinfo2 pname={"초코"} age={"3살"} gender={"남"}/>
        </div>
    )
}

export function Banner(props) {
    return (
        <React.Fragment>
            <div id="mypuppybanner" className="banner slide" data-bs-ride="carousel">
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <Mypuppylist1 />
                    </div>
                    <div className='carousel-item'>
                        <Mypuppylist2 />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}