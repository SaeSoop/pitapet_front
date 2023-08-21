import React from 'react';
import '../../../src/pages/MyDogPage/mydogm/mydogm.css';
import 'bootstrap/dist/css/bootstrap.css';

export function Mypuppytitle(props) {
    return(
        <div className='mypuppytitle'>
            <label className='mypuppytxt'>My Puppy</label>
            <img src={process.env.PUBLIC_URL + '/images/mypuppym_footprints.png'} alt={'타이틀 발자국'} />
        </div>
    )
}

export function Mypuppyinfo(props) {
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

export function Mypuppylist(props) {
    return (
        <div classname="mypuppyset" style={{display: 'flex'} }>
            <Mypuppyinfo pname={"모리"} age={"1살"} gender={"남"}/>
            <Mypuppyinfo pname={"까미"} age={"2살"} gender={"여"}/>
            <Mypuppyinfo pname={"기름이"} age={"3살"} gender={"여"}/>
            <Mypuppyinfo pname={"우유"} age={"1살"} gender={"남"}/>
        </div>
    )
}