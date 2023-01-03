import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';
import { Image } from "@mantine/core";
import { CLIENTS_KANCOON } from "../../utils/clients";

interface ClientsProps {
    items : {
        titre : string
        texte : string
        image : string
    }[]
}

export function Clients_Carousel({items}: ClientsProps){
    const slides = items.map((item) => (
        <Carousel.Slide>
            <h1 className="text-white py-4 font-bold text-center text-client-size-titre">
                {item.titre}
            </h1>
            <h1 className="text-client-size-texte text-center px-80 py-8">
                {item.texte}
            </h1>
            <Image 
                className="mx-auto flex text-center justify-center hover:scale-110 hover:shadow-md transition-all duration-700"
                src={item.image} 
                width='100px'
                height='78px'
            />  
        </Carousel.Slide>
    ))
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    return (
        <Carousel 
            classNames={{
            "indicators" : "pt-10",
            "indicator" : "bg-white active:bg-green active:h-[20px] h-[10px] w-[8px]",
            "controls": "h-10",
            "control" : "hidden phone:flex bg-transparent text-white px-48 h-10 border-none hover:text-green hover:scale-[3] scale-[3]",
            "slide" : "relative flex flex-col",
            
            }}
            height='370px'
            slideSize= '100%'
            withIndicators
            plugins={[autoplay.current]}
            loop
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            >
            {slides}
        </Carousel>
    );
}



export default function Clients(){
    return(
        <div className="bg-black flex flex-col text-white text-center">
            <div className="py-10 text-partenaire-size">
                Quelques Clients Professionnels <br/>
            </div>
            <Clients_Carousel items={CLIENTS_KANCOON}/>
        </div>
    )
}