import { STORES_INT_REALISATIONS } from "../../utils/realisations";
import { RealisationBandeau } from "../common/realisation";
import { RealisationCarousel } from "../common/realisation-carousel";



export default function RealisationsStoresInt(){
    return(
        <>
            <RealisationBandeau></RealisationBandeau>
            <RealisationCarousel items={STORES_INT_REALISATIONS}/>
        </>
    )
}