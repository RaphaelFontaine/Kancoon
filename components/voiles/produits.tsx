import { VOILES_PRODUCT } from "../../utils/constantes";
import { Showcase } from "../common/product";

export default function Produit(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/voile/bandeau/voile_bandeau.jpg" alt={"Voile d'Ombrage KANCOON aux Achards -  spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
            </div>

            {VOILES_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
            

        </>
    )
}