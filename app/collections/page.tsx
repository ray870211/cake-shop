import Image from 'next/image'
import style from './page.module.sass'

export default function collections() {
    return (
        <div className={style.main}>
            <h1>首頁/產品</h1>
            <div className={style.grid_container}>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408817.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408820.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408825.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408827.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408830.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408832.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408834.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408838.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408840.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408842.jpg")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                    <span>name</span>
                </div>
                <div className={style.product}>
                    <Image src={require("../../assets/cake/7R408845.jpg")}
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
