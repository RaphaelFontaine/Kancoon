import { IMail } from 'models'
import type { NextApiRequest, NextApiResponse } from 'next'
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const form_data : IMail = req.body
    try {
        await sgMail.send({
            to : process.env.NODE_ENV === 'development' ? "raphael.fontaine62@outlook.fr" : "contact@kancoon.fr",
            from : "raphael.fontaine18@gmail.com",
            subject: 'Nouveau formulaire rempli sur le site Kancoon.fr',
            templateId : "d-e63def137c0e4ca0b8d9bdd3f773e931",
            dynamic_template_data : form_data
        })
        res.status(200).end()
    } catch (error) {
        res.status(429).send({
            message : "Une erreur est survenue..."
        })
    }
}
