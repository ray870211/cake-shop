/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import style from "./header.module.sass";
import Link from 'next/link';

const Header = () => {

  return (
    <div className={style.header}>
      <div className={style.logo} >Ray</div>
      {/* <img alt='' className='logo'></img> */}
      <Link className={style.navigation} href="/">
        HOME
      </Link>

      <Link className={style.navigation} href="/">
        文章
      </Link>
      <div className={style.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Header;