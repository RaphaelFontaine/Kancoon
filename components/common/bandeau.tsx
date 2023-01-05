import React from 'react';
// import { fadeInDown } from 'react-animations';
// import Radium, {StyleRoot} from 'radium';
// import { fadeInDown } from 'react-animations';
// import jss from 'jss'
// import preset from 'jss-preset-default'
// import { FadeInDown } from 'react-native-reanimated'; 

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
            <div className="bg-white text-black text-primary-2 animate-fadeInDown" >
                <img src={props.image} alt={props.alt} loading="lazy"/>
            </div>
    )
}