import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FaBars } from "react-icons/fa";
import headerImg1 from "./pitapet_header_h100.jpg";
import headerImg2 from "./pitapet_header_h170.jpg"; // 축소 화면일 때 헤더 이미지
import './Header.css'

const StyledHeader = styled.header`
  display: flex;
  background-image: url(${headerImg1});
  width: 100%;
  padding: 8px 12px 8px 12px;
  align-items: center;
  .nav-logo {
    padding: 8px 24px;
    .nav-logo-link {
      font-family: 'Walter Turncoat', cursive;
      text-decoration: none;
      font-size: 32px;
      color: #2f3631;
      font-weight: bold;
    }
  }
  .nav-menu {
    display: flex;
    list-style: none;
  }

  .menuToggleBtn {
    display: none;
    color: #2f3631;
    font-size: 20px;
    position: absolute;
    right: 32px;
    top: 28px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    background-image: url(${headerImg2});
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  padding: 8px 24px;
  align-items: center;

  li {
    padding: 4px 24px;
  }
  .nav-menu-list {
    display: flex;
    text-decoration: none;
    color: #2f3631;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 18px;
    padding: 4px 12px;

    &:hover {
      opacity: 0.7;
      transition: all ease 0.5s;
    }
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    align-items: center;
    width: 100%;
    .nav-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      .nav-menu-list {
        font-size: 14px;
      }
    }
  }
`;

const NavUser = styled.div`
  margin-left: auto;
  .nav-user {
    padding: 8px 24px;
    .nav-user-link {
      display: flex;
      text-decoration: none;
      color: #9D5858;
      align-items: center;
      font-family: 'Noto Sans KR', sans-serif;
    }
  }

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    align-items: center;
    width: 100%;
    .nav-user {
      .nav-user-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 14px;
      }
    }
  }
`;

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav-logo">
          <Link to={"/"} className="nav-logo-link">
            Pit a Pet
          </Link>
        </div>
        <NavMenu isToggleOpen={isToggleOpen}>
          <ul class="nav-menu">
            <li>
              <Link to={"/doginfo"} className="nav-menu-list">
                내 강아지
              </Link>
            </li>
            <li>
              <Link to={"/diary"} className="nav-menu-list">
                한 줄 일기
              </Link>
            </li>
            <li>
              <Link to={"/dogphoto"} className="nav-menu-list">
                사진첩
              </Link>
            </li>
          </ul>
        </NavMenu>
        <NavUser isToggleOpen={isToggleOpen}>
          <div className="nav-user">
            <Link to={"/login"} className="nav-user-link">
              로그인
            </Link>
          </div>
        </NavUser>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
};

export default Header;
