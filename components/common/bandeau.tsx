import React from 'react';
import { motion } from "framer-motion";
import {useEffect} from 'react';
import { useScrollIntoView } from '@mantine/hooks';
import { Button, Text } from '@mantine/core';
import { FiArrowDownCircle } from 'react-icons/fi';

interface BandProps {
    computer : string
    phone: string
    alt : string
}

// function BandeauLeft({children} : any) {
//     return (
//             <motion.div
//                 initial={{ opacity : 0.5 }}
//                 animate={{ opacity : [0.5,1], translateY : [-500, 0] }}
//                 transition={{ duration: 2  }}
//             >
//                 {children}
//             </motion.div>
//     );
//   }

export function Band(props : BandProps){
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });

    useEffect(() => {
        const targets = document.querySelectorAll(".js-show-on-scroll");
        const callback = function(entries : any) {
            entries.forEach(function(entry : any) {
                const animationType = entry.target.dataset.animateType;
                if (entry.isIntersecting) {

                    entry.target.classList.add(animationType);
                  }
            });
        };

        const observer = new IntersectionObserver(callback);
        targets.forEach(function(target) {
            observer.observe(target);
        });
    }, []);
    return( 
        // <BandeauLeft>
        <div data-animate-type="motion-safe:animate-fadeInDown" className="js-show-on-scroll bg-white text-black text-primary-2" >
            <img className="hidden phone:flex" src={props.computer} alt={props.alt} loading="lazy"/>
            <img className="flex phone:hidden" src={props.phone} alt={props.alt} loading="lazy"/>
        </div>
        // </BandeauLeft>
    )
}