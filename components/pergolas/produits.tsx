import { BANDEAU_PERGOLA } from "../../utils/bandeau";
import { PERGOLAS_PRODUCT } from "../../utils/produits";
import { VIDEO_PERGOLA, VIDEO_PERGOLA_2 } from "../../utils/video";
import { Band } from "../common/bandeau";
import { Showcase } from "../common/product";
import { VideoResponsive } from "../common/video";
import {useEffect} from 'react';
import { ImCross } from 'react-icons/im'

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

    const PERGOLA_BIOCLIMATIQUE = PERGOLAS_PRODUCT[0]
    const PERGOLA_TOILE = PERGOLAS_PRODUCT[1]

    return(
        <>
            <Band computer={BANDEAU_PERGOLA.computer} phone={BANDEAU_PERGOLA.phone} alt={BANDEAU_PERGOLA.alt}/>

            <div  className="flex flex-col bp:flex-row bp:h-case-size">
                <div data-animate-type="motion-safe:animate-fadeInLeft" className="js-show-on-scroll flex flex-row bg-white w-full bp:w-1/2 text-title-color ">
                    <div className="flex flex-row bg-white h-grey-band pl-[40px]">
                        <div className="bg-general-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-[20px]">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="text-title-size w-full pr-[13%] bp:pr-[0%] py-[15%] bp:py-[0%] flex items-center justify-center">
                        Exemple d'installation d'une pergola bioclimatique
                    </div>
                </div>
                <VideoResponsive 
                    source={VIDEO_PERGOLA.source}>
                </VideoResponsive>
            </div>

            
            <Showcase 
            left={PERGOLA_BIOCLIMATIQUE.left} title={PERGOLA_BIOCLIMATIQUE.title}
            images={PERGOLA_BIOCLIMATIQUE.images}
            core={PERGOLA_BIOCLIMATIQUE.core}/>

            <div  className="flex flex-col bp:flex-row bp:h-case-size">
                <div data-animate-type="motion-safe:animate-fadeInLeft" className="js-show-on-scroll flex flex-row bg-white w-full bp:w-1/2 text-title-color ">
                    <div className="flex flex-row bg-white h-grey-band pl-[40px]">
                        <div className="bg-general-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-[20px]">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center text-title-size w-full pr-[13%] bp:pr-[15%] py-[15%] bp:py-[0%] ">
                        <div className="flex flex-row">
                            Mission &nbsp;
                            <div className=" z-1 h-1/2"> 
                                <ImCross className="absolute text-[#FF0000] mt-2 z-2 opacity-80" />
                                Im
                            </div>
                            Possible : <br/>
                        </div>
                        <div className="flex items-center justify-center">
                        Pergola sur les toits
                        </div>
                    </div>
                </div>
                <VideoResponsive 
                    source={VIDEO_PERGOLA_2.source}>
                </VideoResponsive>
            </div>

            <Showcase 
            left={PERGOLA_TOILE.left} title={PERGOLA_TOILE.title}
            images={PERGOLA_TOILE.images}
            core={PERGOLA_TOILE.core}/>
        </>
    )
}
