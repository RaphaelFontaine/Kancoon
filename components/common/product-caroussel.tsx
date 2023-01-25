import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export function InstalledCarroussel(props: any) {
  
  const slides = props.images.map((url: string) => (
    <Carousel.Slide key={url}>
      <Image src={url} height='576px' width='full'/>
    </Carousel.Slide>
  ));
  const legendes = props.legendes.map((legend: string) => (
    <div className='text-green'>
      {legend}
    </div>
  ));
  
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel 
      classNames={{
        "indicator" : "bg-white",
        "control" : "bg-white",
      }}
      slideSize= '100%'
      mx="auto" 
      withIndicators
      plugins={[autoplay.current]}
      loop
      height={'675px'}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      >
        {slides}
        {legendes}
    </Carousel>
  );
}

export function ProductCarroussel(props: any) {
  const slides = props.images.map((url: string) => (
    <Carousel.Slide key={url}>
      <Image 
        src={url}  
        width='full'
      />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel 
      className="w-full"
      classNames={{
        "indicator" : "bg-white",
        "control" : "hidden phone:flex bg-white",
      }}
      slideSize= '100%'
      mx="auto" 
      withIndicators
      plugins={[autoplay.current]}
      loop
      height={'auto'}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      >
        {slides}
    </Carousel>
  );
}