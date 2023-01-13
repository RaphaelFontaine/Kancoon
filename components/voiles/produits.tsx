import { BANDEAU_VOILE } from "../../utils/bandeau";
import { VOILES_PRODUCT } from "../../utils/produits";
import { Band } from "../common/bandeau";
import { Showcase } from "../common/product";

export default function Produit(){
    return(
        <>
            <Band computer={BANDEAU_VOILE.computer} phone={BANDEAU_VOILE.phone} alt={BANDEAU_VOILE.alt}/>

            {VOILES_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
            

        </>
    )
}