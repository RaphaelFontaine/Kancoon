export function Services() {
    return (
        <div className="flex flex-col bg-white pb-[5%]">
            <div className="text-black font-bold uppercase text-partenaire-size text-center my-[5%]">
                Nos Services
            </div>
            <div className="flex flex-col bp:flex-row items-center bp:items-end px-[10%] justify-center text-center text-service-corps space-x-[0%] bp:space-x-[3%] space-y-[3%] bp:space-y-[0%]]">
                <div className="flex flex-col border-[1px] px-[2%] py-[3%] border-[#E6E6E6] hover:shadow-2xl hover:scale-105 transition-all duration-700 w-[80%] bp:w-[30%] bp:h-[600px]">
                    <div className="mx-auto">
                        <img src='/assets/accueil/service_logo/Conseil.png' width="151px" height="161px" loading="lazy" alt="icon" decoding="async">
                        </img>
                    </div>
                    <div className="uppercase text-service-title my-6 font-medium text-title-size">
                        Le Conseil
                    </div>
                    <div className="leading-7 text-corps-size">
                        KANCOON est un artisan qui conseille ses clients et les accompagne dans le choix des protections solaires, des matériaux et des produits. Retrouvez-nous au showroom pour une première approche puis en rendez-vous chez vous pour établir un devis au juste prix.
                    </div>
                </div>
                <div className="flex flex-col border-[1px] px-[2%] py-[3%] border-[#E6E6E6] hover:shadow-2xl hover:scale-105 transition-all duration-700 w-[80%] bp:w-[30%] bp:h-[630px]">
                    <div className="mx-auto">
                        <img src='/assets/accueil/service_logo/Qualite.png' width="151px" height="161px" loading="lazy" alt="icon" decoding="async">
                        </img>
                    </div>
                    <div className="uppercase text-service-title my-6 font-medium text-title-size">
                        La Qualité
                    </div>
                    <div className="leading-7 text-corps-size">
                        Nous travaillons avec des fournisseurs à 95% français. Pergolas, stores, bois de terrasse, … tous nos produits ont été rigoureusement sélectionné pour leur qualité et leur durabilité. Nous attachons beaucoup d’importance aux normes NF et CE afin de garantir une prestation de qualité.
                    </div>
                </div>
                <div className="flex flex-col border-[1px] px-[2%] py-[3%] border-[#E6E6E6] hover:shadow-2xl hover:scale-105 transition-all duration-700 w-[80%] bp:w-[30%] bp:h-[600px]">
                    <div className="mx-auto">
                        <img src='/assets/accueil/service_logo/SAV.png' width="151px" height="161px" loading="lazy" alt="icon" decoding="async">
                        </img>
                    </div>
                    <div className="uppercase text-service-title my-8 font-medium text-title-size">
                        Le SAV
                    </div>
                    <div className="leading-7 text-corps-size">
                        La force de Kancoon est la réactivité. A chaque étape de votre projet, nous sommes présents et répondons à vos questions en 48h. Notre équipe se tient prête à vous trouver une solution rapidement. Votre confort est notre priorité.
                    </div>
                </div>
            </div>
        </div>
    )
}