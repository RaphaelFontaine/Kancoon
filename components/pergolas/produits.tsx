import { BANDEAU_PERGOLA } from "../../utils/bandeau";
import { PERGOLAS_PRODUCT } from "../../utils/produits";
import { VIDEO_PERGOLA } from "../../utils/video";
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
            <Band image={BANDEAU_PERGOLA.image} alt={BANDEAU_PERGOLA.alt}/>


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

            {PERGOLAS_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
        </>
    )
}