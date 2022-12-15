import { PARASOLS_REALISATIONS } from "../../utils/realisations";
import { RealisationBandeau } from "../common/realisation";
import { RealisationCarousel } from "../common/realisation-carousel";



export default function RealisationsParasols(){
    return(
        <>
            <RealisationBandeau></RealisationBandeau>
            <RealisationCarousel items={PARASOLS_REALISATIONS}/>
        </>
    )
}