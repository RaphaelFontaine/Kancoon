import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [process.env.PUBLIC_URL + "/assets/all/logo-kancoon.png", 
process.env.PUBLIC_URL + "/assets/all/1-2.png", 
process.env.PUBLIC_URL + "/assets/all/3-2.png"];

interface ImagesList {
    images: [];
}

export default function Demo({ images }: ImagesList) {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators>
      {slides}
    </Carousel>
  );
}