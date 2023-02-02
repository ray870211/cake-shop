import db from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req:NextApiRequest, res:NextApiResponse) => {
  const data = {
    userId:"Ray",
    id:1,
    title:"abc",
    completed:false

  };
  try{
    const db_data = await db.collection("cities").doc("CA").set(data)
    res.end(JSON.stringify(db_data))
  } catch(err){
    console.log(err)
    res.end
  }
};

