import { Carousel } from '@mantine/carousel';
import { Paper, Button, useMantineTheme } from '@mantine/core';
import { HOME_DATA } from '../../utils/home';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

interface CardProps {
  image: string;
  link: string;
  TransparentText: string;
  WhiteText: string;
}

function Card({ image, link, TransparentText, WhiteText }: CardProps) {

  return (
    <Paper
      shadow="md"
      p="xl"
      sx={{ backgroundImage: `url(${image})` }}
      className="w-full h-[720px] bg-cover bg-no-repeat"
    >
      <div className='flex flex-col items-center justify-center align-middle pt-[50%] phone:pt-[18%]'>
        <div className='flex flex-col phone:flex-row text-home-carroussel-title content-center font-bold font-police space-x-0 phone:space-x-4 space-y-2'>
          <div className='text-white'>
            {TransparentText}
            <div className='text-black bg-white'>
              {WhiteText}
            </div>
          </div>
        </div>
        <div className='flex flex-col phone:flex-row pt-[2%] space-x-0 phone:space-x-8 space-y-2 items-align justify-center'>
          <a href={link}>
            <Button className="bg-white text-black hover:bg-black text-home-carroussel-button hover:text-white transition-all duration-[500ms] rounded-none " color="black">
              En Savoir +
            </Button>
          </a>
          <a href="/contact">
            <Button className="bg-transparent text-white hover:text-black text-home-carroussel-button border-white border-1 hover:bg-white transition-all duration-[500ms] rounded-none">
              Contactez Nous
            </Button>
          </a>
        </div>
      </div>
    </Paper>
  );
}

const data = HOME_DATA

export function HomeCarousel() {
  const theme = useMantineTheme();
  const slides = data.map((item) => (
    <Carousel.Slide key={item.WhiteText}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      classNames={{
        "control" : "hidden phone:flex bg-transparent text-white",

      }}
      slideSize="100%"
      align="start"
      withIndicators={false}
      mx='auto'
      loop
      height={'720px'}
      plugins={[autoplay.current]}
      controlSize={60}
    >
      {slides}
    </Carousel>
  );
}