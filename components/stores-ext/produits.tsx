import { BANDEAU_STORE_EXT } from "../../utils/bandeau";
import { STORES_EXT_PRODUCT } from "../../utils/produits";
import { Band } from "../common/bandeau";
import { Showcase } from "../common/product";



export default function Produit(){
    return(
        <>
            <Band computer={BANDEAU_STORE_EXT.computer} phone={BANDEAU_STORE_EXT.phone} alt={BANDEAU_STORE_EXT.alt}/>

            {STORES_EXT_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
        </>
    )
}