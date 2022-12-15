export default function Partenaires(){
    return(
        <>
            <div className="bg-black flex flex-col text-white text-center p-[2%] text-partenaire-size">
                NOS PARTENAIRES <br/>
                <div className="flex flex-wrap gap-20 px-4 py-20 items-center justify-center">
                    <div className="bg-black rounded-full border-white border-2 overflow-hidden hover:scale-110 hover:border-green hover:shadow-xl duration-500 transition-all">
                        <a className="flex justify-center items-center w-40 h-40" target="_blank" href="https://www.decostory.fr/izy/">
                            <img src={"/assets/la-societe/partenaires/izy.png"} className="" alt={"IZY Fentres"} loading="lazy"/>
                        </a>
                    </div>
                    <div className="bg-black rounded-full border-white border-2 overflow-hidden hover:scale-110 hover:border-green hover:shadow-xl duration-500 transition-all">
                        <a className="flex justify-center items-center w-40 h-40" target="_blank" href="https://www.decostory.fr/izy/">
                            <img src={"/assets/la-societe/partenaires/koxx.png"} alt={"Koxx"} loading="lazy"/>
                        </a>
                    </div>
                    <div className="bg-black rounded-full border-white border-2 overflow-hidden hover:scale-110 hover:border-green hover:shadow-xl duration-500 transition-all">
                        <a className="flex justify-center items-center w-40 h-40" target="_blank" href="https://www.decostory.fr/izy/">
                            <img src={"/assets/la-societe/partenaires/reseau-entreprendre.png"} className="" alt={"IZY Fentres"} loading="lazy"/>
                        </a>
                    </div>
                    <div className="bg-black rounded-full border-white border-2 overflow-hidden hover:scale-110 hover:border-green hover:shadow-xl duration-500 transition-all">
                        <a className="flex justify-center items-center w-40 h-40" target="_blank" href="https://www.decostory.fr/izy/">
                            <img src={"/assets/la-societe/partenaires/marchand.png"} alt={"Koxx"} loading="lazy"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}