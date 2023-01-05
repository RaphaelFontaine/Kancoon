import {useEffect} from 'react';

export function VideoResponsive(props : any){
    let source = props
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
        <div data-animate-type="motion-safe:animate-fadeInRight" className="js-show-on-scroll bp:w-1/2 w-full relative pt-[56.25%] bp:pt-[28.125%] overflow-hidden ">
            <iframe
                className="absolute w-full h-full top-0 left-0 bottom-0 right-0"
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="auto"
                src={props.source}
            >
            </iframe>
        </div>
    )
}