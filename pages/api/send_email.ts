import { IMail } from 'models'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const form_data : IMail = req.body
    console.log(form_data)
    res.status(200).end()
}
