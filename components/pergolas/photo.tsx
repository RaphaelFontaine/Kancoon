import { Demo } from "@mantine/ds";
import ProductCarroussel from "../common/product-caroussel";


export default function Photo(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/pergolas/pergola_bandeau.jpg" alt={"Pergolas Bioclimatique posée par KANCOON en Vendée - spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
            </div>

            <div className="flex flex-col lg:flex-row lg:h-case-size">
                <iframe
                    id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="50%"
                    height="100%"
                    src={`https://www.youtube.com/embed/jP4kk6YNMr0`}
                >
                </iframe>
                <div className="flex flex-row bg-white w-1/2 text-title-color">
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
                <div className="h-carrousel-case flex flex-row bg-white w-1/2 text-corps-color">
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
                            La Pergola Bioclimatique
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text">
                            La pergola bioclimatique est un système de protection solaire utilisable en période de grand vent, mais peut aussi protéger de la pluie. Ses lames orientables, permettent de filtrer la lumière tout au long de la journée.  Equipée de LEDS intégrés dans les lames, elle permet de profiter de son extérieur y compris dans les soirées de printemps, d’été et d’automne. De nombreuses options sont proposées permettant une personnalisation (lames rétractables, stores toile latéraux, parois vitrées, chauffage, LEDS de couleurs en périphérie, pilotable de son smartphone). La pergola offre une expérience de confort inédite, utilisable une très grande partie l’année et totalement adaptée à la douceur de notre climat Vendéen.
                        </div>
                    </div>
                </div>
                <div className=" h-carrousel-case w-1/2">
                    {/* <ProductCarroussel></ProductCarroussel> */}
                    <img src="/assets/pergolas/carroussel_pergola_bioclimatique_1.jpg" alt={"Pergolas Bioclimatique posée par KANCOON en Vendée - spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:h-carrousel-case">
            <div className=" h-carrousel-case w-1/2">
                    {/* <ProductCarroussel></ProductCarroussel> */}
                    <img src="/assets/pergolas/carrousel_pergola_toile_1.jpg" alt={"Pergolas Bioclimatique posée par KANCOON en Vendée - spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
                </div>
                <div className="h-carrousel-case flex flex-row bg-white w-1/2 text-corps-color">
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
                            La pergola toile est une excellente alternative à la pergola bioclimatique. Qu’elle soit rétractable ou enroulable, la toile utilisée protège des rayons du soleil et résiste aux intempéries. Montées sur une structure aluminium légère mais solide, elle s’intègre facilement dans tout type d’habitation et apporte une touche de modernité. Créer une zone d’ombre pour manger par exemple est essentielle lorsque le soleil est à son zénith. C’est le pari de la pergola toile. Avec sa motorisation, aucun effort pour l’enrouler ou la dérouler. L’hiver, vous pouvez retirer la toile pour éviter qu’elle s’abîme. Une solution parfaite et esthétique pour vous protéger du soleil.                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-grey-realisation text-realisation-title-size text-center pt-realisation-top pb-realisation-bottom">
                Nos Réalisations
                <div className="text-realisation-corps-size">
                    Les Sables d'Olonne, Saint Gilles Croix de Vie, La Roche sur Yon
                </div>
            </div>
        </>
    )
}