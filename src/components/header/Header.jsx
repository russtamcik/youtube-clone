import { InputGroup, Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { products } from "../../consts/sideBar";

import bars from "../../assets/bars.svg";
import youtubeLogo from "../../assets/YouTubeLogo.svg";
import searchicon from "../../assets/search.svg";
import audio from "../../assets/audio.svg";
import video from "../../assets/video.svg";
import notification from "../../assets/notification.svg";
import login from "../../assets/login.png";
import image1 from "/image 1.png";
import image2 from "/image 2.png";
import image3 from "/image 3.png";
import image4 from "/image 4.png";
import image5 from "/image 5.png";

import "../../css/header.css";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <header>
        <div className="header-wrap">
          <div className="logo">
            <button className="btn" onClick={handleToggle}>
              <img src={bars} alt="" />
            </button>
            <Link to="/">
              <img src={youtubeLogo} alt="" />
            </Link>
          </div>
          <InputGroup className="my-3 header-search">
            <Form.Control
              placeholder="Search"
              className="rounded-start-pill"
            ></Form.Control>
            <button
              id="button-addon2"
              className="rounded-end-circle search-btn"
            >
              <img width="25px" src={searchicon} alt="" />
            </button>
            <div className="audio">
              <img className="rounded-circle" src={audio} alt="" />
            </div>
          </InputGroup>
          <div className="header-media">
            <img src={video} alt="" />
            <img src={notification} alt="" />
            <a href="https://myaccount.google.com/u/0/?utm_source=YouTubeWeb&tab=rk&utm_medium=act&tab=rk&hl=ru">
              <img src={login} alt="" />
            </a>
          </div>
        </div>
      </header>

      <aside className={`${isToggled ? "hide" : "show"}`}>
        <ul className="nav-list">
          {products.map((pr) => (
            <li className="nav-item" key={pr.name}>
              <NavLink className="link">
                <img src={pr.image} alt="" />
                <p>{pr.name}</p>
              </NavLink>
            </li>
          ))}
          <a href="" className="more">
            Show more
          </a>
          <div className="line"></div>
          <div className="subs">
            <p>SUBSCRIPTIONS</p>
          </div>
          <div className="commands">
            <a href="" className="group">
              <img src={image2} alt="" />
              <p>FC Barcelona</p>
            </a>
            <a href="" className="group">
              <img src={image3} alt="" />
              <p>TED</p>
            </a>
            <a href="" className="group">
              <img src={image1} alt="" />
              <p>NNGroup</p>
            </a>
            <a href="" className="group">
              <img src={image4} alt="" />
              <p>ED Sheeran</p>
            </a>
            <a href="" className="group">
              <img src={image5} alt="" />
              <p>FIFA</p>
            </a>
          </div>
        </ul>
      </aside>
    </>
  );
};

export default Header;
