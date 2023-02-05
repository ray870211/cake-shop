/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import style from "./sidebar.module.sass";
import Link from 'next/link';

const Header = () => {

    return (
        <div className={style.left_sidebar}>
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
    );
}
export default Header;