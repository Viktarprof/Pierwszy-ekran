import React from "react";
import s from "./Nav.module.css";
import heart from "./media/iconsLogo/heart.svg";
import cart from "./media/iconsLogo/cartIcon.svg";
import { AiOutlineUser } from "react-icons/ai";

function Nav() {
  return (
    <div className={s.nav_container}>
      <div className={s.burger}>
        <span className={s.line}></span>
        <span className={s.line}></span>
        <span className={s.line}></span>
      </div>
      <div className={s.nav_btns}>
        <img className={s.icons} src={heart} alt="heart" />
        <img className={s.icons} src={cart} alt="Cart" />
        <AiOutlineUser className={s.icons} />
      </div>
    </div>
  );
}

export default Nav;
