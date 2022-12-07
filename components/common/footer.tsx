import Link from "next/link";

export default function Footer(){
  return(
      <>
          <div className="bg-footer-grey text-white p-[2%] w-full flex flex-col ft:flex-row bp:justify-center font-light">
            <div className="flex flex-row w-[100%] bp:w-[40%] px-[10%] ft:px-[0%]">
              <div className="py-[9%]">
                <Link href={"/"}>
                  <img src="/assets/all/logo-kancoon.png" alt={"Kancoon"} width="100%"/>
                </Link>
              </div>
            
              <div className="flex flex-col pl-[30%] ft:pl-[3%] ">
                  <div className="font-semibold text-footer-title">
                    HORAIRES D'OUVERTURES <br/> <br/>
                  </div>
                  <div className="text-footer-corps">
                    Ouvert du lundi au vendredi de 9h30 à 12h et de 14h30 à 18h.  <br/> <br/>
                  </div>
                  <div className="text-footer-corps">
                    Possibilité de prendre RDV sur d’autres horaires.
                  </div>
              </div>
            </div>

            <div className="flex flex-row pl-[3%] py-[7%] ft:py-[0%]">
              <div className="flex flex-col w-1/2 px-[5%] ft:px-[0%]">
                  <div className="font-semibold text-footer-title">
                    CONTACTEZ NOUS <br/> <br/>
                  </div>
                  <div className="text-footer-corps">
                    Tel : <a className="hover:text-green transition-all duration-500" href="tel:+33251959400">02 51 95 94 00 <br/> <br/></a> 
                  </div>
                  <div className="text-footer-corps">
                    Email : <a className="hover:text-green transition-all duration-500" href="mailto:contact@kancoon.fr">contact@kancoon.fr</a>
                  </div>
              </div>
            
              <div className="flex flex-col w-1/2 px-[5%] ft:px-[0%]">
                  <div className="font-semibold text-footer-title">
                    RETROUVEZ NOUS <br/> <br/>
                  </div>
                  <div className="text-footer-corps">
                    <a className="hover:text-green transition-all duration-500" href="https://www.google.com/maps/place/Kancoon/@46.5190377,-1.7813082,15z/data=!4m2!3m1!1s0x0:0xae810b9969796b41?sa=X&ved=2ahUKEwjDgf3cxcDtAhUyxIUKHfn4AJoQ_BIwDHoECBYQBQ" target={"_blank"}> 
                      19 rue Clément Ader Olonne sur Mer 85340 Les Sables d’Olonne
                    </a>
                  </div>
              </div>
            </div>

            <div className="flex flex-col w-full justify-center items-center ft:items-start ft:justify-start ft:w-[20%] pl-[3%]">
                <div className="font-semibold text-footer-title">
                  NOS RESEAUX SOCIAUX <br/> <br/>
                </div>
                <div className="flex flex-row text-footer-corps">

                  <a className="transition-all duration-500 px-[1%]" target="_blank" href= "https://www.facebook.com/kancoonolonne">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook hover:fill-green transition-all duration-500" width="32" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"  stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                  </a>


                  <a className="transition-all duration-500 px-[1%]" target="_blank" href= "https://www.instagram.com/kancoonstorespergolas/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook hover:fill-green transition-all duration-500" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                  </a>

                  <a className="transition-all duration-500 px-[1%]" target="_blank" href= "https://www.linkedin.com/company/kancoon/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook hover:fill-green transition-all duration-500" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <rect x="4" y="4" width="16" height="16" rx="2" />
                      <line x1="8" y1="11" x2="8" y2="16" />
                      <line x1="8" y1="8" x2="8" y2="8.01" />
                      <line x1="12" y1="16" x2="12" y2="11" />
                      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                    </svg>
                  </a>


                    <a className="transition-all duration-500 px-[1%]" target="_blank" href= "https://www.youtube.com/channel/UCpjiJxmhMs5MzIO2xa8yJaA">
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube hover:fill-green transition-all duration-500" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="4" />
                        <path d="M10 9l5 3l-5 3z" />
                      </svg>
                    </a>
                  
                </div>
            </div>
          </div>
      </>
  )
}


