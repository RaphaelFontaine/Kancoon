import React from 'react';
import { motion } from "framer-motion";


interface BandProps {
    computer : string
    phone: string
    alt : string
}

function BandeauLeft({children} : any) {
    return (
            <motion.div
                initial={{ opacity : 0.5 }}
                animate={{ opacity : [0.5,1], translateY : [-500, 0] }}
                transition={{ duration: 2  }}
            >
                {children}
            </motion.div>
    );
  }

export function Band(props : BandProps){

    return( 
        <BandeauLeft>
            <div className="bg-white text-black text-primary-2" >
                <img className="hidden phone:flex" src={props.computer} alt={props.alt} loading="lazy"/>
                <img className="flex phone:hidden" src={props.phone} alt={props.alt} loading="lazy"/>
            </div>
        </BandeauLeft>
    )
}