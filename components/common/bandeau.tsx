import { Transition } from "@mantine/core"

interface BandProps {
    image : string
    alt : string
}

export function Band(props : any){
    return(
        <Transition mounted={true} transition={"slide-down"} duration={4000} timingFunction="ease">
            {() => ( 
                <div className="bg-white text-black text-primary-2">
                    <img src={props.image} alt={props.alt} loading="lazy"/>
                </div>
            )}
        </Transition>
    )
}