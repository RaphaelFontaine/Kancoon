import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = ['/assets/pergolas/carroussel_pergola_bioclimatique_1.jpg','/assets/pergolas/carroussel_pergola_bioclimatique_2.jpg',];

export default function ProductCarroussel() {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} height='576px' width='720px'/>
    </Carousel.Slide>
  ));

  return (
    <Carousel 
      slideSize= '50%'
      mx="auto" 
      withIndicators
      height={'576px'}>
        {slides}
    </Carousel>
  );
}