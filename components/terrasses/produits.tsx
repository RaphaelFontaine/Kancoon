import { BANDEAU_TERRASSE } from "../../utils/bandeau";
import { TERRASSES_PRODUCT } from "../../utils/produits";
import { Band } from "../common/bandeau";
import { Showcase } from "../common/product";

export default function Produit(){
    return(
        <>
        
            <Band computer={BANDEAU_TERRASSE.computer} phone={BANDEAU_TERRASSE.phone} alt={BANDEAU_TERRASSE.alt}/>

            {TERRASSES_PRODUCT.map((product, index) => 
                <Showcase key={index}
                left={product.left} title={product.title}
                images={product.images}
                core={product.core}/>
            )}
                   
        </>
    )
}