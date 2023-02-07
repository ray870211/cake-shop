import { useEffect } from 'react'
import Header from 'components/Header/Header';
import Banner from 'components/Banner/Banner';
import style from './page.module.sass'
import Link from 'next/link';
import Image from 'next/image'
import Footer from "components/Footer/footer"
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
                            <Link href='/1'>
                                <Image src={require("../assets/cake/1.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image>
                            </Link>

                            <span>name</span>
                        </div>
                        <div className={style.product}>
                            <Link href='/2'>
                                <Image src={require("../assets/cake/2.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image>
                            </Link>
                            <span>name</span>
                        </div>
                        <div className={style.product}>
                            <Link href='/3'>
                                <Image src={require("../assets/cake/3.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image>
                            </Link>

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
                                <div className={style.item_image}> <Image src={require("../assets/cake/4.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>原味</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/5.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>蛋糕</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/6.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>草莓</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/7.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                        <div className={style.product_menu_item}>
                            <div className={style.item_inner}>
                                <div className={style.item_header}><p>草莓</p></div>
                                <div className={style.item_image}> <Image src={require("../assets/cake/8.jpg")}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                    priority={true}></Image></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>

    )
}
export default Home
