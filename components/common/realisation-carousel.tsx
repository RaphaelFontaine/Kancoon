import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';


export function RealisationCarousel(props: any) {
    const images = props.images
    const slides = images.images.map((image: any) => (
      <Carousel.Slide >
        <Image 
          src={image[0]} 
          height='576px' 
          width='full'
        />
        <div className="text-white font-bold">
            {image[1]}
        </div>
        
      </Carousel.Slide>
    ));
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
      <Carousel 
        classNames={{
          "indicator" : "bg-white",
          "control" : "hidden phone:flex bg-white",
        }}
        slideSize= '100%'
        mx="auto" 
        withIndicators
        plugins={[autoplay.current]}
        loop
        height={'576px'}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        >
          {slides}
      </Carousel>
    );
  }