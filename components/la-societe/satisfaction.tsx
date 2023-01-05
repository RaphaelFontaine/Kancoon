import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';
import { Box } from "@material-ui/core";

export default function Satisfaction(){
    const [startView, SetStartView] = useState(0)
    const triggerStart = (start: any) => {
        SetStartView(startView + 1)
        if (startView == 1){
            start()
        }
    }
    return(
        <>    
            <div className="bg-general-grey flex flex-col text-white text-center p-10 text-satisfaction-size">
                Notre credo : la satisfaction de nos clients
                <div className="px-[10%] py-[3%] text-corps-size text-start leading-loose">
                    KANCOON est un concepteur-installateur en confort solaire intérieur et extérieur et en aménagement extérieur. Notre objectif est de vous proposer une prestation de haute qualité. Ainsi, vous aurez le plaisir de profiter de façon durable et sereine de vos espaces extérieurs et intérieurs quelle que soit la saison. Enfin, l’ensemble des employés s’engage à un service irréprochable; ainsi nous garantissons une prise en charge des SAV sous 48H.
                </div>
                <div className='flex flex-wrap gap-20 px-4 py-8 items-center justify-center'>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex flex-row space-x-4 items-center justify-center font-black'>
                            <CountUp end={3800} duration={3} redraw={false}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={() => {triggerStart(start)}} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="9" />
                                <circle cx="12" cy="10" r="3" />
                                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                            </svg>
                        </div>
                        <div className='text-satisfaction font-medium'> 
                            Clients Satisfaits
                        </div>
                    </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex flex-row space-x-4 items-center justify-center font-black'>
                                <CountUp end={400} duration={3} redraw={false}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={() => {triggerStart(start)}} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-producthunt" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" />
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                            </div>
                            <div className='text-satisfaction font-medium'> 
                                Projets Réalisés / An
                            </div>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex flex-row space-x-4 items-center justify-center font-black	'>
                            <CountUp end={1700} duration={3} redraw={false}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={() => {triggerStart(start)}} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coffee" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
                                <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                                <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                                <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5z" />
                                <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
                            </svg>
                        </div>
                        <div className='text-satisfaction font-medium'> 
                            Cafés / An
                        </div>
                    </div>
                        <div className='flex flex-col space-y-2'>
                            <div className='flex flex-row space-x-4 items-center justify-center font-black'>
                                <CountUp end={50} duration={3} redraw={false}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={() => {triggerStart(start)}} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-location" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                                </svg>
                            </div>
                            <div className='text-satisfaction font-medium'> 
                                Km Autour Des Sables
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}

