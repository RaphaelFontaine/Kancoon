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
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);

  const slides = items.map((item) => (
    <Carousel.Slide>
        <Image 
            // className='rotate-90'
            src={item.image} 
            height='auto' 
            width='100vh'
        />
    </Carousel.Slide>
))
const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <Group className='visible bp:hidden' position="center">
        <Button className='button-real' onClick={() => setOpened(true)}>NOS RÉALISATIONS</Button>
      </Group>
      <Modal
        className='visible bp:hidden'
        opened={opened}
        size="100%"
        // padding={0}
        transitionDuration={TRANSITION_DURATION}
        withCloseButton={true}
        onClose={() => setOpened(false)}
      >
        <Carousel 
            // className="transition-all duration-1000"
            // classNames={{
            //     "indicators" : "mb-16",
            //     "indicator" : "bg-white",
            //     "control" : "hidden phone:flex bg-white",
            //     "slide" : "relative flex flex-col",
            // }}
            orientation="vertical"
            slideSize= '100%'
            withIndicators 
            sx={{ maxWidth: 320 }}
            mx="auto"
            plugins={[autoplay.current]}
            loop
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            >
                {slides}
        </Carousel>
      </Modal>
    </>
  );
}