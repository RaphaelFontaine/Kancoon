import {InstalledCarroussel} from "../common/product-caroussel";

const installed_pergolas = [
    "/assets/pergolas/installation/installed_pergola_1.jpg",
    "/assets/pergolas/installation/installed_pergola_2.jpg",
    "/assets/pergolas/installation/installed_pergola_3.jpg",
    "/assets/pergolas/installation/installed_pergola_4.jpg",
    "/assets/pergolas/installation/installed_pergola_5.jpg",
    "/assets/pergolas/installation/installed_pergola_6.jpg",
    "/assets/pergolas/installation/installed_pergola_7.jpg",
    "/assets/pergolas/installation/installed_pergola_8.jpg",
    "/assets/pergolas/installation/installed_pergola_9.jpg",
    "/assets/pergolas/installation/installed_pergola_10.jpg",
    "/assets/pergolas/installation/installed_pergola_11.jpg",
    "/assets/pergolas/installation/installed_pergola_12.jpg",
    "/assets/pergolas/installation/installed_pergola_13.jpg",
    "/assets/pergolas/installation/installed_pergola_14.jpg",
    "/assets/pergolas/installation/installed_pergola_15.jpg",

]


export default function Realisations(){
    return(
        <div>
            <div className="bg-grey-realisation text-realisation-title-size text-center pt-realisation-top pb-realisation-bottom">
                Nos Réalisations
                <div className="text-realisation-corps-size">
                    Les Sables d'Olonne, Saint Gilles Croix de Vie, La Roche sur Yon
                </div>
            </div>
            <InstalledCarroussel 
                    className="h-carrousel-case w-full"
                    images= {installed_pergolas}
            >
            </InstalledCarroussel>
        </div>
    )
}