export default function Partenaires(){
    return(
        <>
            <div className="bg-black flex flex-col text-white text-center p-[2%] text-partenaire-size">
                NOS PARTENAIRES <br/>
                <div className="flex flex-row pt-[5%] phone:pb-[2%] items-center justify-center">
                    <div className="flex flex-col bp:flex-row items-center w-1/2 justify-center ">
                        <a style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  target="_blank" href="https://www.decostory.fr/izy/">
                            <img src={"/assets/la-societe/partenaires/izy.png"} width="60%" alt={"IZY Fentres"} loading="lazy"/>
                        </a>
                        <a style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} target="_blank" href="https://www.agencekoxx.fr/">
                            <img src={"/assets/la-societe/partenaires/koxx.png"} width="60%" alt={"Koxx"} loading="lazy"/>
                        </a>
                    </div>
                    <div className="flex flex-col bp:flex-row items-center w-1/2 justify-center ">
                        <a style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} target="_blank" href="https://www.reseau-entreprendre.org/vendee/">
                            <img src={"/assets/la-societe/partenaires/reseau-entreprendre.png"} width="60%" alt={"Réseau Entreprendre Vendée"} loading="lazy"/>
                        </a>
                        <a style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}  target="_blank" href="https://marchand-construction85.fr/"> 
                            <img src={"/assets/la-societe/partenaires/marchand.png"} width="60%" alt={"Marchand Construction"} loading="lazy"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}