import React from "react"
import { Product } from "../../typings"
type PageProps = {
    params: {
        productId: string
    }
}

const fetchProduct = async (productId: string) => {
    const body = {
        "aaa": "aaa"
    }
    const res = await fetch(`${process.env.URL}/api/getProduct`, { method: 'POST', body: JSON.stringify(body), next: { revalidate: 60 } })
    const products: Product[] = await res.json()
    return products
}

async function productPage({ params: { productId } }: PageProps) {
    const products = await fetchProduct(productId)
    console.log(typeof (products))
    // JSON.parse(products)
    return (
        <div>
            {Object.keys(products).map((key) => (
                <div>{key}</div>
            ))}
        </div>
    )
}
export default productPage 