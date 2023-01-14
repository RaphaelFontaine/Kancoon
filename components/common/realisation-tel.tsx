import { useRef, useState } from 'react';
import { Button, Modal, Group } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { Image } from "@mantine/core";
import Autoplay from 'embla-carousel-autoplay';
interface RealisationCarouselProps {
    items : {
        image : string,
        legende : string
    }[]
}

export default function RealisationTel({ items }: RealisationCarouselProps) {
  const TRANSITION_DURATION = 1000;
  const [opened, setOpened] = useState(false);

  const slides = items.map((item) => (
    <Carousel.Slide>
        <Image
            src={item.image} 
            className="rotate-90 h-80 w-[600px] bg-black"
            // width={'600px'}
        />
    </Carousel.Slide>
))
const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <Group className='visible phone:hidden' position="center">
        <Button className='button-real' onClick={() => setOpened(true)}>NOS RÉALISATIONS</Button>
      </Group>

      <Modal
        className='visible phone:hidden bg-transparent h-full'
        opened={opened}
        // size="100%"
        transitionDuration={TRANSITION_DURATION}
        withCloseButton={true}
        onClose={() => setOpened(false)}
      >
        <Carousel
            classNames={{
              "root" : "bg-black",
              "viewport" : "bg-youtube flex items-center justify-center",
              "slide" : "bg-green h-[600px] ",
            }}
            orientation="vertical"
            height={600}
            loop
          >
            {slides}
        </Carousel>
      </Modal>

      {/* <Carousel 
          classNames={{
            "root" : "h-[600px] bg-black",
            "slide" : "rotate-90 w-[600px] bg-green flex items-center justify-center",
            "container" : "w-auto h-[600px] flex items-center justify-center",
          }}
          // className="h-full"
          orientation="vertical"
          // sx={{ maxWidth: 820 }}
          loop
          slideSize= '100%'
          >
            {slides}
      </Carousel> */}
    </>
  );
}