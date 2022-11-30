import {ProductCarroussel} from "../common/product-caroussel";

const stores_interieurs = [
    '/assets/stores-int/stores_interieurs/store_interieur_1.jpg',
];

const stores_venitiens = [
    '/assets/stores-int/stores_venitiens/store_venitien_1.jpg'
]

const stores_venitiens_alu = [
    '/assets/stores-int/stores_venitiens_alu/stores_venitiens_alu_1.jpg',
    '/assets/stores-int/stores_venitiens_alu/stores_venitiens_alu_2.jpg',
    '/assets/stores-int/stores_venitiens_alu/stores_venitiens_alu_1.jpg',
];

const stores_ombre_lumiere = [
    "/assets/stores-int/stores_ombre_lumiere/stores_ombre_lumiere_1.jpg",
    "/assets/stores-int/stores_ombre_lumiere/stores_ombre_lumiere_2.jpg",
    "/assets/stores-int/stores_ombre_lumiere/stores_ombre_lumiere_3.jpg",
    "/assets/stores-int/stores_ombre_lumiere/stores_ombre_lumiere_4.jpg",
]

const stores_rouleaux = [
    "/assets/stores-int/stores_rouleaux/stores_rouleaux_1.jpg",
    "/assets/stores-int/stores_rouleaux/stores_rouleaux_2.jpg",
    "/assets/stores-int/stores_rouleaux/stores_rouleaux_3.jpg",
    "/assets/stores-int/stores_rouleaux/stores_rouleaux_4.jpg",
    "/assets/stores-int/stores_rouleaux/stores_rouleaux_5.jpg",
    "/assets/stores-int/stores_rouleaux/stores_rouleaux_6.jpg",
]

const stores_verticaux = [
    "/assets/stores-int/stores_verticaux/store_vertical_1.jpg",
    "/assets/stores-int/stores_verticaux/store_vertical_2.jpg",
    "/assets/stores-int/stores_verticaux/store_vertical_3.jpg",
    "/assets/stores-int/stores_verticaux/store_vertical_4.jpg",
    "/assets/stores-int/stores_verticaux/store_vertical_5.jpg",
    "/assets/stores-int/stores_verticaux/store_vertical_6.jpg",
]

const stores_duette = [
    "/assets/stores-int/stores_duette/stores_duette_1.jpg",
    "/assets/stores-int/stores_duette/stores_duette_2.jpg",
    "/assets/stores-int/stores_duette/stores_duette_3.jpg",
    "/assets/stores-int/stores_duette/stores_duette_4.jpg",
]

const stores_japonais = [
    "/assets/stores-int/stores_japonais/stores_japonais_1.jpg",
    "/assets/stores-int/stores_japonais/stores_japonais_2.jpg",
    "/assets/stores-int/stores_japonais/stores_japonais_3.jpg",
    "/assets/stores-int/stores_japonais/stores_japonais_4.jpg",
    "/assets/stores-int/stores_japonais/stores_japonais_5.jpg",
]

const stores_fenetres = [
    '/assets/stores-int/stores_fenetres/stores_fenetres_1.jpg',
];

const stores_toiture = [
    '/assets/stores-int/stores_toiture/stores_toiture_1.jpg',
];

const stores_velum = [
    '/assets/stores-int/stores_velum/stores_velum_1.jpg',
];

const stores_rideau_feu = [
    '/assets/stores-int/stores_rideau_feu/stores_rideaux_feu_1.jpg',
];

const moustiquaires = [
    '/assets/stores-int/moustiquaires/moustiquaire_1.jpg',
];

export default function Produit(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/stores-int/bandeau/stores_int_bandeau.jpg" alt={"Stores Intérieur - KANCOON, spécialiste de la protection solaire en Vendée, les Sables d'Olonne, la Tranche sur Mer, Saint Gille Croix de Vie"}/>
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
                            Stores Intérieurs
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Saviez-vous que vous passez près 70% de votre vie à l’intérieur de votre habitation en Vendée ? Autant s’y sentir bien en créant les conditions du confort et bien-être : tamiser la luminosité extérieure et gérer son intimité. Ce sont les deux missions des stores intérieurs. Cela permet aussi de s’intégrer dans la décoration intérieure selon les options désirées. 
                        </div>
                    </div>
                </div>

                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <img 
                        src="/assets/stores-int/stores_interieurs/store_interieur_1.jpg"
                    >
                    </img>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-carrousel-case">
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <img 
                        src="/assets/stores-int/stores_venitiens/store_venitien_1.jpg"
                    >
                    </img>
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
                            Stores Intérieurs
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Saviez-vous que vous passez près 70% de votre vie à l’intérieur de votre habitation en Vendée ? Autant s’y sentir bien en créant les conditions du confort et bien-être : tamiser la luminosité extérieure et gérer son intimité. Ce sont les deux missions des stores intérieurs. Cela permet aussi de s’intégrer dans la décoration intérieure selon les options désirées. 
                        </div>
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
                            Stores vénitiens Alu
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text">
                            Ils se composent de lamelles horizontales qui se relèvent et s’orientent pour permettre un contrôle précis de la lumière et de la visibilité extérieure. Sur-mesure, personnalisables et motorisables, ces stores s’intègrent dans des styles contemporain ou modernes permettant d’apporter une touche d’originalité et créant ainsi, une décoration unique.
                        </div>
                    </div>
                </div>
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <ProductCarroussel
                        images={stores_venitiens_alu}
                    >
                    </ProductCarroussel>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-carrousel-case">
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                        <ProductCarroussel
                            images= {stores_ombre_lumiere}
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
                            Stores Ombre et Lumière
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Ce sont des stores à enroulement innovants qui permettent de moduler l’ombre et la lumière dans une atmosphère douce. En position fermé, ils préservent totalement l’intimité. Ils s’intègrent parfaitement dans des designs contemporains.   
                        </div>
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
                            Stores rouleaux
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text">
                            Ces stores à enroulement permettent de se protéger contre l’éblouissement et la chaleur. Leur encombrement minimal, leurs possibilités dimensionnelles et le large choix de coloris de tissus en font un produit adapté à toutes les configurations. Nos modèles bénéficient d’un mécanisme de fonctionnement permettant une manipulation aisée qui a été récompensé l’IF Product Design Award. Le large choix de coloris de tissus                        </div>
                    </div>
                </div>
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <ProductCarroussel
                        images={stores_rouleaux}
                    >
                    </ProductCarroussel>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-carrousel-case">
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                        <ProductCarroussel
                            images= {stores_verticaux}
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
                            Stores bandes verticales (ou Californiens)
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Ces stores sont constitués de lames qui se dégagent latéralement et s’orientent pour gérer l’éblouissement, l’intimité et la chaleur. Ils s’adaptent aux configurations de formes spéciales ou de grandes dimensions. Leurs lignes épurées sont idéales pour des intérieurs contemporains.                        </div>
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
                            Stores duettes & plissés
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text">
                            Ces stores à enroulement permettent de se protéger contre l’éblouissement et la chaleur. Leur encombrement minimal, leurs possibilités dimensionnelles et le large choix de coloris de tissus en font un produit adapté à toutes les configurations. Nos modèles bénéficient d’un mécanisme de fonctionnement permettant une manipulation aisée qui a été récompensé l’IF Product Design Award. Le large choix de coloris de tissus                        </div>
                    </div>
                </div>
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <ProductCarroussel
                        images={stores_duette}
                    >
                    </ProductCarroussel>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-carrousel-case">
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                        <ProductCarroussel
                            images= {stores_japonais}
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
                            Les parois japonaises
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Elles constituent une solution idéale pour une séparation de pièces, astucieuse pour fermer un placard ou équiper de grandes baies. Les configurations panneaux libres ou panneaux interconnectés permettent une modulation des ouvertures. Tout en filtrant la lumière, elles créent une ambiance épurée s’adaptant parfaitement à une décoration contemporaine et raffinée.
                        </div>
                    </div>
                </div>
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
                            Stores fenêtres de toit
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Adaptés aux fenêtres de la marque Velux, ils permettent l’occultation totale la nuit, la filtration du soleil le jour. Une version extérieure en fait aussi un produit anti-bruit et grêle.                        
                        </div>
                    </div>
                </div>

                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <img 
                        src="/assets/stores-int/stores_fenetres/stores_fenetres_1.jpg"
                    >
                    </img>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-carrousel-case">
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <img 
                        src="/assets/stores-int/stores_fenetres/stores_fenetres_1.jpg"
                    >
                    </img>
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
                            Stores de toiture de véranda
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Ces stores duettes, guidés par câbles inox gainés avec tendeurs, se manoeuvrent par perche ou sont motorisables pour un plus confort d’utilisation. Son tissu alvéolaire permet de réduire l’absorption solaire de la chaleur en été. 
                        </div>
                    </div>
                </div>
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
                            Velum Intérieurs
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Adaptés aux fenêtres de la marque Velux, ils permettent l’occultation totale la nuit, la filtration du soleil le jour. Une version extérieure en fait aussi un produit anti-bruit et grêle.
                        </div>
                    </div>
                </div>

                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <img 
                        src="/assets/stores-int/stores_velum/stores_velum_1.jpg"
                    >
                    </img>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:h-carrousel-case">
                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <img 
                        src="/assets/stores-int/stores_rideau_feu/stores_rideaux_feu_1.jpg"
                    >
                    </img>
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
                            Rideaux Non-Feu
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                        Suivant les dimensions, le poids du rideau, les contraintes de pose, le choix du rail professionnel est essentiel pour la bonne installation et la longévité de l’équipement.Le rideau pour collectivités répond aux exigences des normes exigées dans les lieux publics :
                            -En tissu occultant ou pare-soleil
                            -Classement NON FEU   M1
                            -Nombreux coloris au choix suivant gamme (unis ou imprimés) 
                        </div>
                    </div>
                </div>
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
                            Moustiquaires
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Nos solutions vous protègent tout simplement de tout type d’insectes tout en conservant la vue vers l’extérieur et la possibilité d’aération. Avec un fonctionnement vertical ou latéral, manuel ou motorisé, adaptable sur les fenêtres de toit, nous proposons les solutions adaptées à vos besoins.
                        </div>
                    </div>
                </div>

                <div className=" h-carrousel-case lg:w-1/2 w-full">
                    <img 
                        src="/assets/stores-int/moustiquaires/moustiquaire_1.jpg"
                    >
                    </img>
                </div>
            </div>        
        </>
    )
}