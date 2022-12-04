import { BANDEAU_PERGOLA } from "../../utils/bandeau";
import { PERGOLAS_PRODUCT } from "../../utils/produits";
import { Band } from "../common/bandeau";
import { Showcase } from "../common/product";

export default function Produit(){
    return(
        <>
            <Band image={BANDEAU_PERGOLA.image} alt={BANDEAU_PERGOLA.alt}/>

            <div className="flex flex-col-reverse bp:flex-row bp:h-case-size">
                <div className="bp:w-1/2 w-full relative pt-[56.25%] bp:pt-[28.125%] overflow-hidden ">
                    <iframe
                        className="absolute w-full h-full top-0 left-0 bottom-0 right-0"
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="100%"
                        height="auto"
                        src={`https://www.youtube.com/embed/jP4kk6YNMr0`}
                    >
                    </iframe>
                </div>
                <div className="flex flex-row bg-white w-full bp:w-1/2 text-title-color">
                    <div className="flex flex-row bg-white h-grey-band pl-[40px]">
                        <div className="bg-dark-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-[20px]">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="text-title-size flex items-center ">
                        Exemple d'installation d'une pergola bioclimatique
                    </div>
                </div>
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