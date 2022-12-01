import {ProductCarroussel} from "../common/product-caroussel";

const carrousel_perg_bio = [
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_1.jpg',
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_2.jpg',
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_3.jpg',
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_4.jpg',
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_5.jpg',
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_6.jpg',
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_7.jpg',
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_8.jpg',
    '/assets/pergolas/pergolas_bioclimatique/carroussel_pergola_bioclimatique_9.jpg',
];

const carrousel_perg_toile = [
    '/assets/pergolas/pergolas_toile/carrousel_pergola_toile_1.jpg',
    '/assets/pergolas/pergolas_toile/carrousel_pergola_toile_2.jpg',
    '/assets/pergolas/pergolas_toile/carrousel_pergola_toile_3.jpg',
    '/assets/pergolas/pergolas_toile/carrousel_pergola_toile_4.jpg',
];

export default function Produit(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/pergolas/bandeau/pergola_bandeau.jpg" alt={"Pergolas Bioclimatique posée par KANCOON en Vendée - spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-case-size">
                <div className="lg:w-1/2 w-full relative pt-[56.25%] lg:pt-[28.125%] overflow-hidden ">
                    <iframe
                        className="absolute w-full h-full top-0 left-0 bottom-0 right-0"
                        id="inlineFrameExample"
                        title="Inline Frame Example"
                        width="100%"
                        height="auto"
                        src={`https://www.youtube.com/embed/jP4kk6YNMr0`}
                    >
                    </iframe>
                </div>
                <div className="flex flex-row bg-white w-full lg:w-1/2 text-title-color">
                    <div className="flex flex-row bg-white h-grey-band pl-[40px]">
                        <div className="bg-dark-grey w-grey-band h-grey-band">
                        </div>
                        <div className="bg-white pl-[20px]">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="text-title-size flex items-center ">
                        Exemple d'installation d'une pergola bioclimatique
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:h-carrousel-case">
                <div className="h-carrousel-case flex flex-row bg-white lg:w-1/2 w-full text-corps-color">
                    <div className="flex flex-row bg-white h-grey-band  pl-[40px]">
                        <div className="bg-dark-grey w-grey-band h-grey-band ">
                        </div>
                        <div className="bg-white pl-[20px]">
                            <div className="bg-green w-green-band h-green-band">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-title-size px-title-x py-title-y">
                            La Pergola Bioclimatique
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text">
                            La pergola bioclimatique est un système de protection solaire utilisable en période de grand vent, mais peut aussi protéger de la pluie. Ses lames orientables, permettent de filtrer la lumière tout au long de la journée.  Equipée de LEDS intégrés dans les lames, elle permet de profiter de son extérieur y compris dans les soirées de printemps, d’été et d’automne. De nombreuses options sont proposées permettant une personnalisation (lames rétractables, stores toile latéraux, parois vitrées, chauffage, LEDS de couleurs en périphérie, pilotable de son smartphone). La pergola offre une expérience de confort inédite, utilisable une très grande partie l’année et totalement adaptée à la douceur de notre climat Vendéen.
                        </div>
                    </div>
                </div>
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <ProductCarroussel
                        images= {carrousel_perg_bio}
                    >
                    </ProductCarroussel>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-carrousel-case">
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                        <ProductCarroussel
                            images= {carrousel_perg_toile}
                        >
                        </ProductCarroussel>
                </div>
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
                            La Pergola Toile
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            La pergola toile est une excellente alternative à la pergola bioclimatique. Qu’elle soit rétractable ou enroulable, la toile utilisée protège des rayons du soleil et résiste aux intempéries. Montées sur une structure aluminium légère mais solide, elle s’intègre facilement dans tout type d’habitation et apporte une touche de modernité. Créer une zone d’ombre pour manger par exemple est essentielle lorsque le soleil est à son zénith. C’est le pari de la pergola toile. Avec sa motorisation, aucun effort pour l’enrouler ou la dérouler. L’hiver, vous pouvez retirer la toile pour éviter qu’elle s’abîme. Une solution parfaite et esthétique pour vous protéger du soleil.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}