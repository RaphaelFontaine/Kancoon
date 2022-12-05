import { BANDEAU_PARASOLS } from "../../utils/bandeau";
import { VIDEO_PARASOL } from "../../utils/video";
import { Band } from "../common/bandeau";
import { VideoResponsive } from "../common/video";

export default function Partenaires(){
    return(
        <>
            <div className="bg-black flex flex-col text-white text-center p-[10px] text-partenaire-size">
                Nos Partenaires <br/>
                <div className="flex flex-col phone:flex-row items-center justify-center">
                    <div className="flex flex-col bp:flex-row items-center w-1/2">
                        <img src={"/assets/la-societe/partenaires/izy.png"} width="50%" alt={"IZY Fentres"} loading="lazy"/>
                        <img src={"/assets/la-societe/partenaires/koxx.png"} width="50%" alt={"Koxx"} loading="lazy"/>
                    </div>
                    <div className="flex flex-col bp:flex-row items-center w-1/2">
                        <img src={"/assets/la-societe/partenaires/reseau-entreprendre.png"} width="50%" alt={"Réseau Entreprendre Vendée"} loading="lazy"/>
                        <img src={"/assets/la-societe/partenaires/marchand.png"} width="50%" alt={"Marchand Construction"} loading="lazy"/>
                    </div>
                </div>
            </div>
        </>
    )
}