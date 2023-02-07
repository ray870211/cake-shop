import style from "./footer.module.sass"
import Image from "next/image"
export default function footer() {
    return (
        <div className={style.footer}>
            <div className={style.about}>
                <div className={style.logo}>
                    <Image src={require("../../assets/logo.png")}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        priority={true}></Image>
                </div>
                <div className={style.content}>
                    <h1>What is Lorem Ipsum?</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
            <div className={style.connect}>
                <div className={style.text}>優惠訊息</div>
                <div className={style.input}>
                    <input placeholder="YOU EMAIL"></input>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className={style.icons}>
                <Image src={require("../../assets/icons/facebook_fb_media_social_icon_124262.png")}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    priority={true}></Image>
                <Image src={require("../../assets/icons/ig_instagram_media_social_icon_124260.png")}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    priority={true}></Image>
            </div>
        </div>
    )
}