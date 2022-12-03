import { STORES_INT_PRODUCT } from "../../utils/constantes";
import {ProductCarroussel} from "../common/product-caroussel";



export default function Produit(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/stores-int/bandeau/stores_int_bandeau.jpg" alt={"Stores Intérieur - KANCOON, spécialiste de la protection solaire en Vendée, les Sables d'Olonne, la Tranche sur Mer, Saint Gille Croix de Vie"}/>
            </div>
            {STORES_INT_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
        </>
    )
}


interface ShowcaseProps {
    left : boolean
    title : string
    core : string
    images : string[]
}
function Showcase(props : ShowcaseProps){
    let {left, title, core, images} = props

    return(
        <div className={`flex flex-col bp:flex-row h-auto ${left ? "" : "bp:flex-row-reverse"}`}>
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
                        {title}
                    </div>
                    <div className=" text-corps-size pt-[10%] pb-[13%] text-corps-color leading-phone-text bp:leading-text">
                        {core} 
                    </div>
                </div>
            </div>

            <div className="h-auto bp:w-1/2 w-full">
                {
                    images.length === 1 ?
                    <img src={images[0]}/> 
                    : 
                    <ProductCarroussel images= {images}/>
                }
            </div>
        </div>
    )
}