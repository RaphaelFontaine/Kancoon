import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from 'embla-carousel-autoplay';
import { Button, Image } from "@mantine/core";
import { HOME_DATA } from "../../utils/home";
import { motion, useInView } from "framer-motion";

interface HomeCarouselProps {
    items : {
        image : string
        link : string
        TransparentText : string
        WhiteText : string
    }[]
}

function TitleLeft({children} : any) {
    return (
            <motion.div
                initial={{ opacity : 0 }}
                whileInView={{ opacity : [0,1], translateX : [-400, 0] }}
                transition={{ duration: 1  }}
            >
                {children}
            </motion.div>
    );
  }

function ButtonRight({children} : any) {
    return (
            <motion.div
                initial={{ opacity : 0 }}
                whileInView={{ opacity : [0,1], translateX : [400, 0] }}
                transition={{ duration: 2, delay : 0.5 }}
            >
                {children}
            </motion.div>
    );
  }

  function ButtonLeft({children} : any) {
    return (
            <motion.div
                initial={{ opacity : 0 }}
                whileInView={{ opacity : [0,1], translateX : [-400, 0] }}
                transition={{ duration: 2, delay : 0.5 }}
            >
                {children}
            </motion.div>
    );
  }

export function HomeCarouselContent({items}: HomeCarouselProps){

    const slides = items.map((item, index) => (
        <Carousel.Slide>
            <Image 
                data-animate-type="motion-safe:animate-ZoomIn"
                className="mx-auto z-10 brightness-75 absolute"
                src={item.image} 
                width='full'
                height='730px'
            />   

            <div className='z-20 absolute w-full mx-auto mt-60 flex flex-col items-center justify-center'>
                <div className='flex flex-col phone:flex-row text-home-carroussel-title content-center font-bold font-police space-x-0 phone:space-x-4 space-y-2'>
                    <TitleLeft>
                        <div className='text-white'>
                            {item.TransparentText}
                            <div className='text-white uppercase border-green border-4'>
                                {item.WhiteText}
                            </div>
                        </div>
                    </TitleLeft>
                </div>
                <div className='flex flex-col items-center justify-center w-full mx-auto phone:flex-row py-4 space-x-0 phone:space-x-8 space-y-2 phone:space-y-0'>
                    <a href={item.link}>
                        <ButtonLeft>
                            <Button className=" button-home w-40 h-16 leading-3 hover:bg-dark-grey text-home-carroussel-button transition-all duration-[500ms] rounded-none " color="black">
                                En Savoir +
                            </Button>
                        </ButtonLeft>
                    </a>
                    <a href="/contact">
                    <ButtonRight>
                        <Button className=" button-home-right bg-transparent w-52 h-16 leading-3 text-white hover:text-black text-home-carroussel-button border-white border-1 hover:bg-white transition-all duration-[500ms] rounded-none">
                            Contactez Nous
                        </Button>
                    </ButtonRight>
                    </a>
                </div>
            </div>
        </Carousel.Slide>
    ))
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    return (
        
        <Carousel 
            classNames={{
                "controls": "h-5 hover:text-green rounded-full px-10",
                "control" : "hidden phone:flex bg-transparent h-5 text-white rounded-full scale-[3] hover:scale-[3]",
                "slide" : "relative flex flex-col",
            }}
            height='730px'
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