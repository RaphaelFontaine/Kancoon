import React from 'react';
import {useEffect} from 'react';

interface BandProps {
    image : string
    alt : string
}

export function Band(props : any){

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
            <div data-animate-type="motion-safe:animate-fadeInDown" className="js-show-on-scroll  bg-white text-black text-primary-2" >
                <img src={props.image} alt={props.alt} loading="lazy"/>
            </div>
    )
}