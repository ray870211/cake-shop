import Image from 'next/image'
import style from './page.module.sass'

export default function collections() {
    return (
        <div className={style.main}>
            <h1>首頁/產品</h1>
            <div className={style.grid_container}>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/1.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/2.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/3.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/4.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/5.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/6.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/8.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/9.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/10.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>

            </div>
        </div>
    )
}
