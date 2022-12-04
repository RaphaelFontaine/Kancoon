import { BANDEAU_TERRASSE } from "../../utils/bandeau";
import { TERRASSES_PRODUCT } from "../../utils/produits";
import { Band } from "../common/bandeau";
import { Showcase } from "../common/product";

export default function Produit(){
    return(
        <>
        
            <Band image={BANDEAU_TERRASSE.image} alt={BANDEAU_TERRASSE.alt}/>

            {TERRASSES_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
                   
        </>
    )
}