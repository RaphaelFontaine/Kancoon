import { BANDEAU_LA_SOCIETE } from "../../utils/bandeau";
import { LA_SOCIETE_PRODUCT } from "../../utils/produits";
import { VIDEO_LA_SOCIETE } from "../../utils/video";
import { Band } from "../common/bandeau";
import { Showcase } from "../common/product";
import { VideoResponsive } from "../common/video";
import {useEffect} from 'react';

export default function Produit(){
    useEffect(() => {
        const targets = document.querySelectorAll(".js-show-on-scroll");

        const callback = function(entries : any) {
            entries.forEach(function(entry : any) {
                const animationType = entry.target.dataset.animateType;
                if (entry.isIntersecting) {

                    entry.target.classList.add(animationType);
                  }
            });
        };

        const observer = new IntersectionObserver(callback);
        targets.forEach(function(target) {
            observer.observe(target);
        });
    }, []);

    return(
        <>
            <Band computer={BANDEAU_LA_SOCIETE.computer} phone={BANDEAU_LA_SOCIETE.phone} alt={BANDEAU_LA_SOCIETE.alt}/>

            <div className="flex flex-col bp:flex-row bp:h-case-size">
                <div data-animate-type="motion-safe:animate-fadeInLeft" className="js-show-on-scroll h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
                    <div className="absolute flex flex-row z-1 h-grey-band pl-band-left">
                        <div className="bg-general-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-band-between">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col z-0 pt-[8%] px-[14%]">
                        <div className="text-title-size text-center">
                            KANCOON 
                        </div>
                        <div className="text-corps-size pt-[9%] pb-[12%] leading-phone-text bp:leading-text lg:leading-max-text">
                            Entreprise artisanale créée en 2008 aux Sables d’Olonne, KANCOON est spécialisée de la protection solaire de l’habitat et ses aménagements extérieurs. Nous nous déplaçons à votre domicile ou vous accueillons dans notre show-room de 250m2 pour échanger avec vous et proposer la solution adaptée à vos besoins. Nos compagnons, présents dans l’entreprise depuis de nombreuses années, sont des experts en installation de pergolas, stores et terrasses bois avec un savoir-faire complémentaire en électricité, automatismes, connexions et finitions. Notre périmètre d’intervention est d’environ 25Km autour du pays des Olonnes.
                        </div>
                    </div>
                </div>
                <VideoResponsive 
                    source={VIDEO_LA_SOCIETE.source}>
                </VideoResponsive>
            </div>

            {LA_SOCIETE_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
        </>
    )
}