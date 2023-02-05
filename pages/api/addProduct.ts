import db from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = JSON.parse(req.body)
  console.log("abc:" + body)
  const data = {
    class: body.class,
    product: {
      id: 1,
      title: body.title,
      price: body.price,
    }
  };
  try {
    const db_data = await db.collection("Products").doc(data.class).set(data.product)
    res.end(JSON.stringify(db_data))
  } catch (err) {
    console.log(err)
    res.end()
  }
};

