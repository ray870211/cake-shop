import db from "../../utils/db";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const cityRef = db.collection('cities').doc('CA');
        const doc = await cityRef.get();
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            // console.log(doc.data());
            const data = doc.data()
            console.log(data)
            res.end(JSON.stringify(data));
            // res.end(JSON.stringify({ completed: false, id: 1, userId: 'Ray', title: 'abc' })
            // )
        }
    } catch (err) {
        console.log(err)
        res.end
    }
};

