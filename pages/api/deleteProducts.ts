import db from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req:NextApiRequest, res:NextApiResponse) => {
  const data = {
    name: "Los Angeles",
    description: "CA",
    id:1,
    image: [
      {
        title:'title',
        description:'description',
      }
    ],
    price:"20",
    tags:[
      "tag1","tag2",
    ],
    
  };
  try{
    const db_data = await db.collection("cities").doc("cssdeess").delete()
    res.end(JSON.stringify(db_data))
  } catch(err){
    console.log(err)
    res.end
  }
};

