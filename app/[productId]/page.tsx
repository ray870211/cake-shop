import React from "react"
import { Product } from "../../typings"
import Image from "next/image"
import style from "./page.module.sass"
type PageProps = {
    params: {
        productId: string
    }
}
async function productPage({ params: { productId } }: PageProps) {
    return (

        <div className={style.wrapper}>
            <div className="title">
                <h1>首頁/產品/名字</h1>
            </div>
            <div className={style.check_out}>
                <Image src={require(`../../assets/cake/${productId}.jpg`)}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    priority={true}></Image>
                <div className={style.detail}>
                    <h1 className="detail_title">abc</h1>
                    <div className="detail_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut fringilla lacus, eu malesuada ipsum. Maecenas quis ornare ligula. Nunc hendrerit bibendum porttitor.</div>
                    <div className={style.price}>
                        <p>320$</p>
                    </div>
                    <div className={style.link_top}></div>
                    <h2>規格</h2>
                    <select className={style.select_product} name="pets" id="pet-select">
                        <option value="">蛋糕規格</option>
                        <option value="dog">12吋</option>
                        <option value="cat">16吋</option>

                    </select>
                    <div className={style.link_top}></div>
                    <div className={style.buttons}>
                        <div className={style.num_btns}>
                            <button className={style.num_btn}>-</button>
                            <p>3</p>
                            <button className={style.num_btn}>+</button>
                        </div>
                        <button className={style.buy_btn}>直接購買</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default productPage 