import React from "react";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

function Footer() {
    return (
        <>
            <hr className="hr-sz">
            </hr>
            <div className="mail mb-2">
                <li>
                    <span>Contact) lora3226@naver.com</span>
                </li>
            </div>
            <div className="use-content">
                <li className="mx-4">
                    <Link to={"/useterms"} className="use">
                        이용약관
                    </Link>
                </li>
                <li className="mx-4">
                    <Link to={"/usepriv"} className="use">
                        개인정보처리방침
                    </Link>
                </li>
            </div>
        </>
    )
}

export default Footer;