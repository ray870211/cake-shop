import { useEffect } from 'react'
import Header from 'components/Header/Header';
import Banner from 'components/Banner/Banner';
import style from './page.module.sass'
import Link from 'next/link';
import Image from 'next/image'
// const fetchProduct = async (productId: string) => {
//     const res = await fetch("http://localhost:3000/api/getProduct", { next: { revalidate: 60 } })
//     const products: Product[] = await res.json()
//     return products
// }

async function Home() {
    return (
        <>
            <div>
                <Banner></Banner>
            </div>
            <div className={style.block}>
                <div className={style.block_header}>
                    <h1>熱賣產品</h1>
                    <Link href='/collections'>全部商品</Link>
                </div>
                <div className={style.block_container}>
                    <div className={style.product_container}>
                        <div className={style.product}>

                            <Image src={require("../assets/cake/7R408817.jpg")}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                priority={true}></Image>
                            <span>name</span>
                        </div>
                        <div className={style.product}>
                            <Image src={require("../assets/cake/7R408820.jpg")}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                priority={true}></Image>
                            <span>name</span>
                        </div>
                        <div className={style.product}>
                            <Image src={require("../assets/cake/7R408825.jpg")}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                                priority={true}></Image>
                            <span>name</span>
                        </div>
                    </div>
                </div>
                <div className={style.block}>
                    <div className={style.block_header}>
                        <h1>波士頓派</h1>
                    </div>
                    <div className={style.product_menu_container}>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>巧克力</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/7R408840.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>原味</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/7R408827.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>蛋糕</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/7R408830.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>草莓</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/7R408832.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>草莓</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/7R408834.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
export default Home
