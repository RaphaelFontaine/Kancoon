import { BANDEAU_PARASOLS } from "../../utils/bandeau";
import { VIDEO_PARASOL } from "../../utils/video";
import { Band } from "../common/bandeau";
import { VideoResponsive } from "../common/video";

export default function Produit(){
    return(
        <>
            <Band image={BANDEAU_PARASOLS.image} alt={BANDEAU_PARASOLS.alt}/>

            <div className="flex flex-col-reverse bp:flex-row bp:h-case-size">
                <div className="h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
                    <div className="absolute flex flex-row z-1 h-grey-band pl-band-left">
                        <div className="bg-dark-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-band-between">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col z-0 pt-[8%] px-[15%]">
                        <div className="text-title-size text-center">
                            Parasol professionnel
                        </div>
                        <div className=" text-corps-size pt-[10%] pb-[13%] text-corps-color leading-phone-text bp:leading-text">
                            Le parasol est la première solution de protection solaire dans son jardin ou sur sa terrasse. Rond, carré ou rectangulaire, avec un bras central ou déporté, vous vous protègerez du soleil avec élégance et simplicité. Afin de vous garantir la pérennité et la sécurité de votre choix, nous ne proposons que des parasols « professionnels».
                        </div>
                    </div>
                </div>
                <VideoResponsive 
                    source={VIDEO_PARASOL.source}>
                </VideoResponsive>
            </div>
        </>
    )
}