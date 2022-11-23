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
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel 
      color='#fff'
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

export function ProductCarroussel(props: any) {
  const slides = props.images.map((url: string) => (
    <Carousel.Slide key={url}>
      <Image src={url} height='576px' width='720px'/>
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel 
      slideSize= '50%'
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