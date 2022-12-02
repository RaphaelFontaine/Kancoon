import {ProductCarroussel} from "../common/product-caroussel";

const terrasse_bois = [
    '/assets/terrasses/terrasses_bois/terrasse_bois_1.jpg',
];

const terrasse_ipe = [
    '/assets/terrasses/terrasses_ipe/terrasse_ipe_1.jpg'
]

const terrasse_cumaru = [
    '/assets/terrasses/terrasses_cumaru/terrasse_cumaru_1.jpg',
];

export default function Produit(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/terrasses/bandeau/terrasse_bandeau.jpg" alt={"Terrasse - KANCOON, spécialiste de la protection solaire en Vendée, les Sables d'Olonne, la Tranche sur Mer, Saint Gille Croix de Vie"}/>
            </div>

            <div className="flex flex-col bp:flex-row bp:h-carrousel-case">
                <div className="h-carrousel-case flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
                    <div className="flex flex-row bg-white h-grey-band pl-[40px]">
                        <div className="bg-dark-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-[20px]">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-title-size px-title-x py-title-y">
                            Terrasses Bois
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Les compagnons de chez Kancoon sont spécialistes de l’aménagement extérieur. Donc la pose de terrasse bois fait partie de leur savoir-faire en menuiserie. Au-delà de l’installation, nous pouvons vous conseiller quant à la meilleure essence de bois pour les lames de votre terrasse, vous proposer des spots intégrés.
                        </div>
                    </div>
                </div>

                <div className=" h-carrousel-case bp:w-1/2 w-full">
                    <img 
                        src="/assets/terrasses/terrasses_bois/terrasse_bois_1.jpg"
                    >
                    </img>
                </div>
            </div>

            <div className="flex flex-col-reverse bp:flex-row bp:h-carrousel-case">
                <div className=" h-carrousel-case bp:w-1/2 w-full">
                    <img 
                        src="/assets/terrasses/terrasses_ipe/terrasse_ipe_1.jpg"
                    >
                    </img>
                </div>
                <div className="h-carrousel-case flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
                    <div className="flex flex-row bg-white h-grey-band pl-[40px]">
                        <div className="bg-dark-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-[20px]">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-title-size px-title-x py-title-y">
                            Terrasses IPÉ
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Très stable, durable et incontournable, également appelée l’ébène verte, cette essence d’Amérique du Sud est idéale pour la réalisation de terrasses haut de gamme.

                            Ce bois parfait est d’une couleur brun jaunâtre et brun sombre olive.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bp:flex-row bp:h-carrousel-case">
                <div className="h-carrousel-case flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
                    <div className="flex flex-row bg-white h-grey-band pl-[40px]">
                        <div className="bg-dark-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-[20px]">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-title-size px-title-x py-title-y">
                            Terrasses Exotique Cumaru
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Stable et indémodable, cette essence d’Amérique du Sud utilisée en ouvrage extérieur est une bonne alternative économique à l’IPÉ. 

                            Ce bois parfait est de couleur brun orangé.
                        </div>
                    </div>
                </div>

                <div className=" h-carrousel-case bp:w-1/2 w-full">
                    <img 
                        src="/assets/terrasses/terrasses_cumaru/terrasse_cumaru_1.jpg"
                    >
                    </img>
                </div>
            </div>
                   
        </>
    )
}