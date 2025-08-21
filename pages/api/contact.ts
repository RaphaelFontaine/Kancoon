import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Méthode non autorisée" });
  }

  const { Nom, Email, Téléphone, Sujet, Message } = req.body as {
    Nom: string;
    Email: string;
    Téléphone: string;
    Sujet?: string;
    Message?: string;
  };

  try {
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "",
      to: process.env.CONTACT_EMAIL_TO || "",
      subject: "Nouveau formulaire de contact remplit venant de Kancoon.fr",
      html: `
        <p><b>Nom :</b> ${Nom}</p>
        <p><b>Email :</b> ${Email}</p>
        <p><b>Téléphone :</b> ${Téléphone}</p>
        <p><b>Sujet :</b> ${Sujet || "-"}</p>
        <p><b>Message :</b><br/>${Message || "-"}</p>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Email envoyé !" });
  } catch (error) {
    console.error("Erreur Resend:", error);
    return res
      .status(500)
      .json({ success: false, message: "Erreur envoi email." });
  }
}
