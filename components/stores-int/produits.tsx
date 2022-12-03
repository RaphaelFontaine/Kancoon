import { STORES_INT_PRODUCT } from "../../utils/constantes";
import { Showcase } from "../common/product";



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

