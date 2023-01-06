import {useEffect} from 'react';

export function RealisationBandeau() {
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
    return (
        <div data-animate-type="motion-safe:animate-fadeIn" className="js-show-on-scroll bg-grey-realisation text-realisation-title-size text-center pt-realisation-top pb-realisation-bottom">
                Nos Réalisations
                <div className="text-realisation-corps-size">
                    Les Sables d'Olonne, Saint Gilles Croix de Vie, La Roche sur Yon
                </div>
            </div>
    )
}