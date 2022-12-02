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
                <img src="/assets/stores-ext/bandeau/stores_ext_bandeau.jpg" alt={"Stores bannes et pergola KANCOON à la Tranche sur Mer -  spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
            </div>

            <div className="flex flex-col bp:flex-row bp:h-auto">
                <div className="h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
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
                            Stores Extérieurs
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Le store extérieur vous protège du soleil mais aussi habille votre façade ou s’efface dans celle-ci. Pour profiter de votre terrasse, balcon, loggia ou véranda en bénéficiant d’un soleil filtré, découvrez nos solutions de stores extérieurs.
                        </div>
                    </div>
                </div>

                <div className=" h-auto bp:w-1/2 w-full">
                    <img 
                        src="/assets/stores-ext/stores_exterieur/store_exterieur_1.jpg"
                    >
                    </img>
                </div>
            </div>

            <div className="flex flex-col-reverse bp:flex-row bp:h-auto">
                <div className=" h-auto bp:w-1/2 w-full">
                        <ProductCarroussel
                            images= {stores_banne}
                        >
                        </ProductCarroussel>
                </div>
                <div className="h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
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
                            Stores Bannes
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Situé au-dessus de votre terrasse ou balcon, il constitue un rempart anti-éblouissement. Il permet aussi de réduire la surchauffe solaire dans votre habitation. Personnalisable à souhait (taille, couleurs de toile, texture & matériaux, lumière intégrée), il peut aussi protéger votre intimité avec un lambrequin déroulable. Ainsi, vous pourrez profiter de vos extérieurs avec un confort renforcé.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bp:flex-row bp:h-auto">
                <div className="h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
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

                <div className=" h-auto bp:w-1/2 w-full">
                    <img 
                        src="/assets/stores-ext/stores_verticaux/store_vertical_1.jpg"
                    >
                    </img>
                </div>
            </div>

            <div className="flex flex-col-reverse bp:flex-row bp:h-auto">
                <div className=" h-auto bp:w-1/2 w-full">
                        <ProductCarroussel
                            images= {stores_projection}
                        >
                        </ProductCarroussel>
                </div>
                <div className="h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
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
                            Stores à projection
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Solution alternative aux store verticaux, le store à projection permet une bonne gestion des apports lumineux, apports solaires et intimité visuelle. Leur design spécifique en fait un objet d’animation de façade position ouverte et un objet discret et élégant en position fermé.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bp:flex-row bp:h-auto">
                <div className="h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
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
                            Stores de véranda
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text">
                            Pièce à vivre en lien étroit avec l’extérieur, la véranda peut procurer des désagréments en période estivale. Comme toutes les pièces vitrées, l’ajout d’une solution de protection solaire permet de retrouver le bien être attendu et rendre son usage confortable tout au long de l’année.
                        </div>
                    </div>
                </div>
                <div className=" h-auto bp:w-1/2 w-full">
                    <ProductCarroussel
                        images={stores_veranda}
                    >
                    </ProductCarroussel>
                </div>
            </div>

            <div className="flex flex-col-reverse bp:flex-row bp:h-auto">
                <div className=" h-auto bp:w-1/2 w-full">
                        <ProductCarroussel
                            images= {stores_bso}
                        >
                        </ProductCarroussel>
                </div>
                <div className="h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
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
                            Brise soleil orientable (BSO)
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text items-center">
                            Le BSO orientable fait partie des protections solaires les plus efficaces. Ils permettent un contrôle avancé de la luminosité, de chaleur et de l’intimité. Résolument moderne, il s’intègre dans les architectures contemporaines.
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col bp:flex-row bp:h-auto">
                <div className="h-auto flex flex-row bg-white bp:w-1/2 w-full text-corps-color">
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
                            Store terrasse -double pente-
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text">
                            Ce store permet de profiter sa terrasse ou de son jardin tout en étant protégé du soleil. Le store double pente peut couvrir une surface de 10 à 35m2 permettant de grandes réceptions aux jours. L’option pare-soleil couchant est utile pour se protéger des derniers rayons du soleil. 
                        </div>
                    </div>
                </div>
                <div className=" h-auto bp:w-1/2 w-full">
                    <ProductCarroussel
                        images={stores_terrasses}
                    >
                    </ProductCarroussel>
                </div>
            </div>
        </>
    )
}