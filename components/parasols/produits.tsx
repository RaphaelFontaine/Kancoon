
export default function Produit(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/parasols/bandeau/parasol_bandeau.jpg" alt={"Stores bannes et pergola KANCOON à la Tranche sur Mer -  spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
            </div>

            <div className="flex flex-col lg:flex-row lg:h-case-size">
                <div className="flex flex-row bg-white w-full lg:w-1/2 text-title-color">
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
                            Parasol professionnel
                        </div>
                        <div className=" text-corps-size text-corps-color pr-corps-right leading-text">
                            Le parasol est la première solution de protection solaire dans son jardin ou sur sa terrasse. Rond, carré ou rectangulaire, avec un bras central ou déporté, vous vous protègerez du soleil avec élégance et simplicité. Afin de vous garantir la pérennité et la sécurité de votre choix, nous ne proposons que des parasols « professionnels ».
                        </div>
                    </div>
                </div>
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
            </div>
        </>
    )
}