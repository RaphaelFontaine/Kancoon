import { Transition } from "@mantine/core"

interface BandProps {
    image : string
    alt : string
}

export function Band(props : any){
    return(
        <div className="bg-white text-black text-primary-2">
            <img src={props.image} alt={props.alt} loading="lazy"/>
        </div>
    )
}
