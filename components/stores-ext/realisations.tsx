import { STORES_EXT_REALISATIONS } from "../../utils/realisations";
import { RealisationBandeau } from "../common/realisation";
import { RealisationCarousel } from "../common/realisation-carousel";



export default function RealisationsStoresExt(){
    return(
        <>
            <RealisationBandeau></RealisationBandeau>
            <RealisationCarousel items={STORES_EXT_REALISATIONS}/>
        </>
    )
}