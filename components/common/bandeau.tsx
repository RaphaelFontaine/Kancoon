import React from 'react';
import { fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

interface BandProps {
    image : string
    alt : string
}

export function Band(props : any){
    const styles = {
        fadeInDown: {
          animation: 'x 1.5s',
          animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
        }
      }
    return(
        <StyleRoot>
            <div className="bg-white text-black text-primary-2" style={styles.fadeInDown}>
                <img src={props.image} alt={props.alt} loading="lazy"/>
            </div>
        </StyleRoot>
    )
}