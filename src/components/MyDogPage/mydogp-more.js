import React from 'react';
import { Modal, Button, Form, Container } from 'reactstrap';
import '../../pages/MyDogPage/mydogp/mydogp-more';
import 'bootstrap/dist/css/bootstrap.css';

export function MymoreImg(props) {
    const now = new Date(); 
     
    const propDate = new Date(props.date);
    const propYear = propDate.getFullYear();
    const propMonth = propDate.getMonth();
    const propDay = propDate.getDate();  
    
    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth();
    const todayDay = now.getDate();

    const familyyear = todayYear - propYear;

    const yearStyle = {
        fontSize: '18px'
    };
    const nameStyle = {
        marginBottom: '0px',
        fontSize: '20px',
        fontWeight: 'bold'
    };
    const infoStyle = {
        marginTop: '0px',
        fontSize: '12px',
        fontWeight: 'bold'
    };
    const hrStyle = {
        width: '100%', 
        marginBottom: '30px',
        marginTop: '10px'
    };

    if (propMonth === todayMonth && propDay === todayDay) {
        return (
            <div className='moreprofile text-center'>
                <label className='familyyears' style={yearStyle}>가족이 된 지 {familyyear}주년 !</label>
                <br />
                <label className='mypuppytxt' style={nameStyle}>{props.puppyname} </label>
                <br />
                <label className='morepinfo' style={infoStyle}> {props.puppygender} / {props.puppytype}</label>
                <hr style={hrStyle} />
            </div>
        );
    } else {
        return (
            <div className='moreprofile text-center'>
                <label className='mypuppytxt' style={nameStyle}>{props.puppyname} </label>
                <br />
                <label className='morepinfo' style={infoStyle}> {props.puppygender} / {props.puppytype}</label>
                <hr style={hrStyle} />
            </div>
        );
    }
}
