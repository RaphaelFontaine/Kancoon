import { PERGOLAS_REALISATIONS } from "../../utils/realisations";
import { RealisationCarousel } from "../common/realisation-carousel";



export default function Realisations(){
    return(
        <RealisationCarousel items={PERGOLAS_REALISATIONS}/>
    )
}