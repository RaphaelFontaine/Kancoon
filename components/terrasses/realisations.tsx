import { TERRASSES_REALISATIONS } from "../../utils/realisations";
import { RealisationBandeau } from "../common/realisation";
import { RealisationCarousel } from "../common/realisation-carousel";

export default function RealisationsTerrasses(){
    return(
        <div>
            <RealisationBandeau></RealisationBandeau>
            <RealisationCarousel items={TERRASSES_REALISATIONS}/>
        </div>
    )
}