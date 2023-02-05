import db from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const db_data = await db.collection("cities").doc("cssdeess").delete()
    res.end(JSON.stringify(db_data))
  } catch (err) {
    console.log(err)
    res.end
  }
};

