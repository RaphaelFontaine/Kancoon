import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';
import { Button, Image } from "@mantine/core";
import { HOME_DATA } from "../../utils/home";

interface HomeCarouselProps {
    items : {
        image : string
        link : string
        TransparentText : string
        WhiteText : string
    }[]
}

export function HomeCarouselContent({items}: HomeCarouselProps){
    const slides = items.map((item) => (
        <Carousel.Slide>
                <Image 
                    className="mx-auto z-10 brightness-75 relative"
                    src={item.image} 
                    width='full'
                    height='720px'
                />   

                <div className='z-20 absolute w-full mx-auto mt-60 flex flex-col items-center justify-center'>
                    <div className='flex flex-col phone:flex-row text-home-carroussel-title content-center font-bold font-police space-x-0 phone:space-x-4 space-y-2'>
                        <div className='text-white'>
                            {item.TransparentText}
                            <div className='text-black bg-white'>
                                {item.WhiteText}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center w-full mx-auto phone:flex-row py-4 space-x-0 phone:space-x-8 space-y-2 phone:space-y-0'>
                        <a href={item.link}>
                            <Button className=" w-40 h-16 leading-3 bg-white text-black hover:bg-black text-home-carroussel-button hover:text-white transition-all duration-[500ms] rounded-none " color="black">
                                En Savoir +
                            </Button>
                        </a>
                        <a href="/contact">
                            <Button className="bg-transparent w-52 h-16 leading-3 text-white hover:text-black text-home-carroussel-button border-white border-1 hover:bg-white transition-all duration-[500ms] rounded-none">
                                Contactez Nous
                            </Button>
                        </a>
                    </div>
                </div>
        </Carousel.Slide>
    ))
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    return (
        <Carousel 
            classNames={{
                "controls": "h-5 hover:text-green rounded-full px-10",
                "control" : "hidden phone:flex bg-transparent h-5 text-white rounded-full focus:scale-[3] scale-[3]",
                "slide" : "relative flex flex-col",
            }}
            height='720px'
            slideSize= '100%'
            plugins={[autoplay.current]}
            loop
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            >
            {slides}
        </Carousel>
    );
}



export default function HomeCarousel(){
    return(
        <div className="bg-black flex flex-col text-white text-center">
            <HomeCarouselContent items={HOME_DATA}/>
        </div>
    )
}