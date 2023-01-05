import React from 'react';

interface BandProps {
    image : string
    alt : string
}

export function Band(props : any){
    // const styles = {
    //     fadeInDown: {
    //       animation: 'x 1.5s',
    //       animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    //     }
    //   }
    return(
            <div className="bg-white text-black text-primary-2 motion-safe:animate-fadeInDown" >
                <img src={props.image} alt={props.alt} loading="lazy"/>
            </div>
    )
}