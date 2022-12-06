import Link from "next/link";

export default function Footer(){
  return(
      <>
          <div className="bg-footer-grey text-white p-[2%] flex bp:flex-row">
            <Link href={"/"}>
              <img src="/assets/all/logo-kancoon.png" alt={"Kancoon"} className="mx-2 h-14"/>
            </Link>
            <div className="flex flex-col w-[20%]">
                <div className="font-semibold text-footer-title">
                  HORAIRES D'OUVERTURES
                </div>
                <div className="text-footer-corps">
                  Ouvert du lundi au vendredi de 9h30 à 12h et de 14h30 à 18h.
                </div>
                <div className="text-footer-corps">
                  Possibilité de prendre RDV sur d’autres horaires.
                </div>
            </div>

            <div className="flex flex-col w-[20%]">
                <div className="font-semibold text-footer-title">
                  CONTACTEZ NOUS 
                </div>
                <div className="text-footer-corps">
                  Tel : <a href="tel:+33251959400">02 51 95 94 00</a>
                </div>
                <div className="text-footer-corps">
                  Email : <a href="mailto:contact@kancoon.fr">contact@kancoon.fr</a>
                </div>
            </div>

            <div className="flex flex-col w-[20%]">
                <div className="font-semibold text-footer-title">
                  RETROUVEZ NOUS 
                </div>
                <div className="text-footer-corps">
                  <a href="https://www.google.com/maps/place/Kancoon/@46.5190377,-1.7813082,15z/data=!4m2!3m1!1s0x0:0xae810b9969796b41?sa=X&ved=2ahUKEwjDgf3cxcDtAhUyxIUKHfn4AJoQ_BIwDHoECBYQBQ" target={"_blank"}> 
                    19 rue Clément Ader Olonne sur Mer 85340 Les Sables d’Olonne
                  </a>
                </div>
            </div>

            <div className="flex flex-col w-[20%]">
                <div className="font-semibold text-footer-title">
                  NOS RESEAUX SOCIAUX
                </div>
                <div className="flex flex-row text-footer-corps">
                  <div>
                    <a target="_blank" href= "https://www.facebook.com/kancoonolonne">
                      <img src="/assets/footer/facebook_favicon.png"/>
                    </a>
                  </div>
                  <div>
                    <a target="_blank" href= "https://www.instagram.com/kancoonstorespergolas/">
                      <img src="/assets/footer/instagram_favicon.png"/>
                    </a>
                  </div>
                  <div>
                    <a target="_blank" href= "https://www.linkedin.com/company/kancoon/">
                      <img src="/assets/footer/linkedin_favicon.png"/>
                    </a>
                  </div>
                  <div>
                    <a target="_blank" href= "https://www.youtube.com/channel/UCpjiJxmhMs5MzIO2xa8yJaA">
                      <img src="/assets/footer/youtube_favicon.png"/>
                    </a>
                  </div>
                </div>
            </div>

          </div>
      </>
  )
}
