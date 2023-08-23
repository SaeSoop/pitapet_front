import React from 'react';
import HorizonLine from '../../utils/horizontal_line';
import '../../../src/pages/MyDogPage/mydogp/mydogp-more';
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

    if (propMonth === todayMonth && propDay === todayDay) {
        return (
            <div className='moreprofile'>
                <label className='familyyears'>가족이 된 지 {familyyear}주년 !</label>
                <label className='mypuppytxt'>{props.puppyname} </label>
                <label className='morepinfo'> ({props.puppygender}/{props.puppytype})</label>
                <HorizonLine />
            </div>
        );
    } else {
        return (
            <div className='moreprofile'>
                <label className='mypuppytxt'>{props.puppyname} </label>
                <label className='morepinfo'> ({props.puppygender}/{props.puppytype})</label>
                <HorizonLine />
            </div>
        );
    }
}
