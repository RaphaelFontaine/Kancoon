import { PERGOLAS_REALISATIONS } from "../../utils/realisations";
import { RealisationBandeau } from "../common/realisation";
import { RealisationCarousel } from "../common/realisation-carousel";
import RealisationTel from "../common/realisation-tel";

export default function RealisationsPergolas(){
    return(
        <>
            <RealisationBandeau></RealisationBandeau>
            <RealisationCarousel items={PERGOLAS_REALISATIONS}/>
            <RealisationTel items={PERGOLAS_REALISATIONS}></RealisationTel>
        </>
    )
}