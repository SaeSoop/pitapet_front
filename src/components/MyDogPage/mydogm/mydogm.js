import React from 'react';
import '../../../pages/MyDogPage/mydogm/mydogm.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyImg1 from './mypuppym_image1.png';
import BoneImg from './mypuppym_bone.png';

export function Mypuppyinfo(props) {
    return (
        <div className="mypuppyinfo">
            <img className="mypuppyimg1" src={MyImg1} alt="Mypuppy1"/>
            <nav>
                <img className="boneLeft" src={BoneImg} alt="BoneLeft1"/>
                <label className='mypuppytxt'>{props.pname} ({props.age}/{props.gender})</label>
                <img className="boneRight" src={BoneImg} alt="BoneRight1"/>
            </nav>
        </div>
    );
}
