import { STORES_EXT_PRODUCT } from "../../utils/constantes";
import { Showcase } from "../common/product";



export default function Produit(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/stores-ext/bandeau/stores_ext_bandeau.jpg" alt={"Stores bannes et pergola KANCOON à la Tranche sur Mer -  spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
            </div>

            {STORES_EXT_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
        </>
    )
}