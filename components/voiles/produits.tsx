import {ProductCarroussel} from "../common/product-caroussel";

const stores_exterieurs = [
    '/assets/stores-ext/stores_exterieur/store_exterieur_1.jpg',
];

const stores_banne = [
    '/assets/stores-ext/stores_banne/store_banne_1.jpg',
    '/assets/stores-ext/stores_banne/store_banne_2.jpg',
    '/assets/stores-ext/stores_banne/store_banne_3.jpg',
    '/assets/stores-ext/stores_banne/store_banne_4.jpg',
    '/assets/stores-ext/stores_banne/store_banne_5.jpg',
    '/assets/stores-ext/stores_banne/store_banne_6.jpg',
    '/assets/stores-ext/stores_banne/store_banne_7.jpg',
    '/assets/stores-ext/stores_banne/store_banne_8.jpg',
    '/assets/stores-ext/stores_banne/store_banne_9.jpg',
    '/assets/stores-ext/stores_banne/store_banne_10.jpg',
    '/assets/stores-ext/stores_banne/store_banne_11.jpg',
    '/assets/stores-ext/stores_banne/store_banne_12.jpg'
]

const stores_verticaux = [
    '/assets/stores-ext/stores_verticaux/store_vertical_1.jpg',
];

const stores_projection = [
    "/assets/stores-ext/stores_projection/store_projection_1.jpg",
    "/assets/stores-ext/stores_projection/store_projection_2.jpg",
]

const stores_veranda = [
    "/assets/stores-ext/stores_veranda/store_veranda_1.jpg",
    "/assets/stores-ext/stores_veranda/store_veranda_2.jpg",
    "/assets/stores-ext/stores_veranda/store_veranda_3.jpg",
]

const stores_bso = [
    "/assets/stores-ext/stores_bso/store_bso_1.jpg",
    "/assets/stores-ext/stores_bso/store_bso_2.jpg",
]

const stores_terrasses = [
    "/assets/stores-ext/stores_terrasses/store_terrasses_1.jpg",
    "/assets/stores-ext/stores_terrasses/store_terrasses_2.jpg",
    "/assets/stores-ext/stores_terrasses/store_terrasses_3.jpg",
]

export default function Produit(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/voile/bandeau/voile_bandeau.jpg" alt={"Voile d'Ombrage KANCOON aux Achards -  spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-carrousel-case">
                <div className="h-carrousel-case flex flex-row bg-white lg:w-1/2 w-full text-corps-color">
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
                            Stores Verticaux
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Vos fenêtres, baies vitrées et vérandas sont des éléments de votre habitat permettant de bénéficier de lumière et de vision vers l’extérieur. Mais pour mieux en profiter, il convient de pouvoir gérer ces apports lumineux, ces apports solaires et cette vue sur l’extérieur. Nos différents modèles de stores verticaux apportent des réponses modulées à ces différents besoins. Enfin, les différentes solutions proposées, leur design spécifique et une palette de plus de 500 coloris de tissus permettent une intégration harmonieuse à votre façade.
                        </div>
                    </div>
                </div>

                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <img 
                        src="/assets/voile/voile/voile_1.jpg"
                    >
                    </img>
                </div>
            </div>
            

        </>
    )
}