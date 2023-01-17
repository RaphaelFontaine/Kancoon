import { Carousel } from "@mantine/carousel";
import { useRef, useState } from "react";
import Autoplay from 'embla-carousel-autoplay';
import { Image } from "@mantine/core";
import { CLIENTS_KANCOON } from "../../utils/clients";
import { GrMapLocation } from 'react-icons/gr'

interface ClientsProps {
    items : {
        titre : string
        texte : string
        image : string
    }[]
}

export function Clients_Carousel({items}: ClientsProps){
    const [selectedSlide, setSelectedSlide] = useState(0)
    const slides = items.map((item, index) => (
        <Carousel.Slide>
            {/* <GrMapLocation width='4em' height='4em' color="white"/> */}
            <h1 className="text-white py-4 font-bold text-center text-client-size-titre">
                
                {item.titre}
            </h1>
            <h1 className="text-client-size-texte text-center px-[22%] py-8">
                {item.texte}
            </h1>
            <Image 
                className="mx-auto flex text-center pt-6 justify-center hover:scale-110 hover:shadow-md transition-all duration-700"
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
                "indicator" :  "bg-white h-[10px] w-[10px] rounded-full",
                "controls": "h-10",
                "control" : "hidden phone:flex bg-transparent text-white px-[15%] h-10 border-none hover:text-green hover:scale-[3] scale-[3]",
                "slide" : "relative flex flex-col",
            }}
            height='420px'
            slideSize= '100%'
            onSlideChange={ (index) => { setSelectedSlide(index)}}
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
            <div className="py-10 text-partenaire-size uppercase">
                Quelques Clients Professionnels <br/>
            </div>
            <Clients_Carousel items={CLIENTS_KANCOON}/>
        </div>
    )
}