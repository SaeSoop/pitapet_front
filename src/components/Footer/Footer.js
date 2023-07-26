import React, { Component } from 'react';
// import './App.css';

function Footer() {
    return (
        <div>
            <footer>
                <h1>align="center" width ="71%"</h1> 
                <div className="mail">
                    <span>Contact{')'} lora3226@naver.com</span>
                </div>
                <div className="use">
                    <ul>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;