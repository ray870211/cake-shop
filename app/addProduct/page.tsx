"use client"
import React, { useState, useEffect } from "react"
import { Product } from "../../typings"
type PageProps = {
    params: {
        productId: string
    }
}

function addProduct({ params: { productId } }: PageProps) {
    // JSON.parse(products)

    // const [isLoading, setIsLoading] = useState(false)
    // const [formData, setFormData] = useState({
    // })
    // const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    //     setIsLoading(true)
    //     event.preventDefault()
    //     const data: Product = {
    //         class: "birthdayCake",
    //         title: "abc",
    //         price: event.target.price.value
    //     }
    //     setFormData(data)
    //     console.log(JSON.stringify(formData))
    // }
    // const fetchAddProduct = async () => {
    //     if (isLoading) {
    //         try {
    //             const res = await fetch(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/addProduct`, { method: "POST", body: JSON.stringify(formData), next: { revalidate: 60 } })
    //             setIsLoading(false)
    //         }
    //         catch (err) {
    //             console.log(err)
    //         }
    //     }
    // }
    // useEffect(() => {
    //     fetchAddProduct()
    // }, [isLoading])
    return (
        <div>
            {/* <form onSubmit={handleSubmit} method='post'>
                <label htmlFor='title'>名稱</label>
                <input type='text' id='title' name='title' />
                <label htmlFor='price'>價格</label>
                <input type='text' id='price' name='price' />
                <button type='submit'>Submit</button>
            </form> */}
        </div>
    )
}
export default addProduct 