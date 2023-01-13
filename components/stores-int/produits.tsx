import { BANDEAU_STORE_INT } from "../../utils/bandeau";
import { STORES_INT_PRODUCT } from "../../utils/produits";
import { Band } from "../common/bandeau";
import { Showcase } from "../common/product";



export default function Produit(){
    return(
        <>
            <Band computer={BANDEAU_STORE_INT.computer} phone={BANDEAU_STORE_INT.phone} alt={BANDEAU_STORE_INT.alt}/>

            {STORES_INT_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
        </>
    )
}

