/* eslint-disable jsx-a11y/anchor-is-valid */
"use client"
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import style from "./sidebar.module.sass";
import Link from 'next/link';

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    // const hamburgerOnClick = () => {
    //     if (isActive) {
    //         setIsActive(false)
    //     } else {
    //         setIsActive(true)
    //     }
    // }
    return (
        <div className={style.sidebar_container}>
            {/* <div onClick={hamburgerOnClick} className={(isActive ? style.close_btn : style.hamburger)}>
                <div></div>
                <div></div>
                <div></div>
            </div> */}
            <div className={(isActive ? style.closed + " " + style.left_sidebar : style.left_sidebar)}>
                <div className={style.logo} >
                    <div>logo</div>
                </div>
                {/* <img alt='' className='logo'></img> */}
                <div className={style.navigation}>
                    <Link href="/">
                        HOME
                    </Link>
                    <Link href="/">
                        波士頓派
                    </Link>
                    <Link href="/">
                        蜂蜜蛋糕
                    </Link>
                    <Link href="/">
                        奶凍捲
                    </Link>
                    <Link href="/">
                        生日蛋糕
                    </Link>
                    <Link href="/">
                        彌月蛋糕
                    </Link>
                    <Link href="/">
                        最新資訊
                    </Link>
                </div>
                <div className={style.lan}>
                    <Link className={style.navigation} href="/">
                        Chi
                    </Link>
                    <span className={style.navigation}> | </span>
                    <Link className={style.navigation} href="/">
                        Eng
                    </Link>
                </div>
            </div>
        </div>

    );
}
export default Header;