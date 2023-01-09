import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';
import {useEffect} from 'react';

interface RealisationCarouselProps {
    items : {
        image : string,
        legende : string
    }[]
}
export function RealisationCarousel({ items }: RealisationCarouselProps) {
    const slides = items.map((item) => (
        <Carousel.Slide>
            <Image 
                src={item.image} 
                height='576px' 
                width='full'
            />
            <h1 className="text-white py-4 font-bold text-center">
                {item.legende}
            </h1>
        </Carousel.Slide>
    ))
    const autoplay = useRef(Autoplay({ delay: 2000 }));

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

    return (
        <Carousel 
            data-animate-type="motion-safe:animate-fadeIn"
            className="js-show-on-scroll h-full phone:h-auto phone:w-auto hover:rotate-90 phone:hover:rotate-0 transition-all duration-1000"
            classNames={{
                "indicators" : "mb-16",
                "indicator" : "bg-white",
                "control" : "hidden phone:flex bg-white",
                "slide" : "relative flex flex-col",
            }}
            slideSize= '100%'
            mx="auto" 
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