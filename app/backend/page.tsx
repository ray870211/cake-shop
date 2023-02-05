"use client";
import { Product } from "../../typings";
import { useState } from "react";
type PageProps = {
    params: {
        productId: string;
    };
};
const fetchProduct = async (productId: string) => {
    const res = await fetch("http://localhost:3000/api/getProduct", { next: { revalidate: 60 } });
    const products: Product[] = await res.json();
    return products;
};

export default async function backend({ params: { productId } }: PageProps) {
    const [data, setData] = useState();
    const products = async (productId: string) => {
        return await fetchProduct(productId);
    };
    return (
        <div>
            <form action='/send-data-here' method='post'>
                <label htmlFor='first'>新增產品</label>
                <input type='text' id='first' name='first' />
                <label htmlFor='last'>Last name:</label>
                <input type='text' id='last' name='last' />
                <button type='submit'>Submit</button>
            </form>
            <div className='product'>
                <button onClick={() => products(productId)}>search</button>
            </div>
            <div className='list'>
                {data ? (
                    <>
                        {Object.keys(products).map((key) => (
                            <div>{key}</div>
                        ))}
                    </>
                ) : (
                    <>
                        <div></div>
                    </>
                )}
            </div>
        </div>
    );
}
