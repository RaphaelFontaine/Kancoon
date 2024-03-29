import {ProductCarroussel} from "../common/product-caroussel";
import { useRef} from 'react';
import { motion, useInView } from "framer-motion";

interface ShowcaseProps {
    left : boolean
    title : string
    core : string
    images : string[]
}

function FadeRight({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
        className="w-full h-full"
          style={{
            transform: isInView ? "none" : "translateX(50vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }

function FadeLeft({children} : any) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <motion.div
        className="w-full h-full"
          style={{
            transform: isInView ? "none" : "translateX(-50vw)",
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1)"
          }}
        >
          {children}
        </motion.div>
      </section>
    );
  }
  

export function Showcase(props : ShowcaseProps){
    let {left, title, core, images} = props

    return(
        <div className={`flex flex-col bp:flex-row z-1 h-auto ${left ? "" : "bp:flex-row-reverse"}`}>
            <div className={`${left ? "visible" : "hidden"} text-corps-color h-auto flex flex-row bp:w-1/2 w-full`}>
                <FadeLeft>
                    <div className="pl-band-left absolute flex flex-row z-20 h-grey-band">
                        <div  className="bg-general-grey h-grey-band w-grey-band">
                        </div>
                        <div className="bg-white pl-band-between">
                            <div className="bg-green h-green-band w-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-white h-full space-y-4 z-10 py-10 bp:py-0 lg:py-6 px-16">
                        <div className="text-title-size text-center">
                            {title}
                        </div>
                        <div className="text-corps-size leading-max-text bp:leading-phone-text lg:leading-max-text">
                            {core}
                        </div>
                    </div>
                </FadeLeft>
            </div>
            <div className={`${left ? "hidden" : "visible"} text-white h-auto flex flex-row bp:w-1/2 w-full`}>
                <FadeRight>
                    <div className="right-0 pr-band-left absolute flex flex-row z-1 h-grey-band">
                        <div  className="bg-green h-green-band w-grey-band">
                        </div>
                        <div className="bg-general-grey pl-band-between">
                            <div className="bg-white h-grey-band w-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 bg-general-grey h-full z-10 py-10 bp:py-0 lg:py-6 px-16">
                        <div className="text-title-size text-center">
                            {title}
                        </div>
                        <div className="text-corps-size leading-max-text bp:leading-phone-text lg:leading-max-text">
                            {core}
                        </div>
                    </div>
                </FadeRight>
            </div>

            <div className={`${left ? "hidden" : "visible"} h-auto bp:w-1/2 w-full`}>
                <FadeLeft>
                    {
                        images.length === 1 ?
                        <img 
                            src={images[0]}
                            loading="lazy"
                        />
                        : 
                        <ProductCarroussel images= {images}/>
                    }
                </FadeLeft>
            </div>

            <div className={`${left ? "visible" : "hidden"} h-auto bp:w-1/2 w-full`}>
            <FadeRight>
                {
                    images.length === 1 ?
                    <img 
                        src={images[0]}
                        loading="lazy"
                    />
                    : 
                    <ProductCarroussel images= {images}/>
                }
            </FadeRight>
            </div>
        </div>
    )
}
