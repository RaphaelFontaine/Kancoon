import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';
import { Button, Image } from "@mantine/core";
import { HOME_DATA } from "../../utils/home";
import {useEffect} from 'react';

interface HomeCarouselProps {
    items : {
        image : string
        link : string
        TransparentText : string
        WhiteText : string
    }[]
}

export function HomeCarouselContent({items}: HomeCarouselProps){
    useEffect(() => {
        const targets = document.querySelectorAll(".js-show-on-scroll");

        const callback = function(entries : any) {
            entries.forEach(function(entry : any) {
                const animationType = entry.target.dataset.animateType;
                if (entry.isIntersecting) {

                    entry.target.classList.add(animationType);
                  }
            });
        };

        const observer = new IntersectionObserver(callback);
        targets.forEach(function(target) {
            observer.observe(target);
        });
    }, []);

    const slides = items.map((item) => (
        <Carousel.Slide>
            
            <Image 
                data-animate-type="motion-safe:animate-ZoomIn"
                className="js-show-on-scroll mx-auto z-10 brightness-75 absolute"
                src={item.image} 
                width='full'
                height='720px'
            />   

            <div className='z-20 absolute w-full mx-auto mt-60 flex flex-col items-center justify-center'>
                <div data-animate-type="motion-safe:animate-fadeInLeftHome" className='js-show-on-scroll delay-700 flex flex-col phone:flex-row text-home-carroussel-title content-center font-bold font-police space-x-0 phone:space-x-4 space-y-2'>
                    <div className='text-white'>
                        {item.TransparentText}
                        <div className='text-white uppercase border-green border-4'>
                            {item.WhiteText}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-full mx-auto phone:flex-row py-4 space-x-0 phone:space-x-8 space-y-2 phone:space-y-0'>
                    <a href={item.link}>
                        <Button data-animate-type="motion-safe:animate-fadeInLeftHome" className="js-show-on-scroll button-home w-40 h-16 leading-3 hover:bg-dark-grey text-home-carroussel-button transition-all duration-[500ms] rounded-none " color="black">
                            En Savoir +
                        </Button>
                    </a>
                    <a href="/contact">
                        <Button data-animate-type="motion-safe:animate-fadeInRightHome" className="js-show-on-scroll button-home-right bg-transparent w-52 h-16 leading-3 text-white hover:text-black text-home-carroussel-button border-white border-1 hover:bg-white transition-all duration-[500ms] rounded-none">
                            Contactez Nous
                        </Button>
                    </a>
                </div>
            </div>
        </Carousel.Slide>
    ))
    const autoplay = useRef(Autoplay({ delay: 3500 }));

    return (
        <Carousel 
            classNames={{
                "controls": "h-5 hover:text-green rounded-full px-10",
                "control" : "hidden phone:flex bg-transparent h-5 text-white rounded-full hover:scale-[3] scale-[3]",
                "slide" : "relative flex flex-col",
            }}
            height='720px'
            slideSize= '100%'
            plugins={[autoplay.current]}
            loop
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