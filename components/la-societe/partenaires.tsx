interface PartenairesProps {
    items : {
        image : string
        link : string
        alt : string
    }[]
}

const PARTENAIRES_KANCOON = [
    {
        image: "/assets/la-societe/partenaires/izy.png",
        link: "https://www.decostory.fr/izy/",
        alt: "IZY Fentres"
    },
    {
        image: "/assets/la-societe/partenaires/koxx.png",
        link: "https://www.agencekoxx.fr/",
        alt: "Koxx"
    },
    {
        image: "/assets/la-societe/partenaires/reseau-entreprendre.png",
        link: "https://www.reseau-entreprendre.org/vendee/",
        alt: "Réseau Entreprendre"
    },
    {
        image: "/assets/la-societe/partenaires/marchand.png",
        link: "https://marchand-construction85.fr/",
        alt: "Marchand Construction"
    },
    {
        image: "/assets/la-societe/partenaires/logo_rse.png",
        link: "https://www.lsodeveloppement.fr/s-implanter-et-se-developper/label-rse-respon-sables/",
        alt: "RSE"
    }
]

export function PartenairesCorps({items}: PartenairesProps){
    const partenaires = items.map((item) => (
        <div className="bg-black rounded-full border-white border-2 overflow-hidden hover:scale-110 hover:border-green duration-500 transition-all">
            <a className="flex justify-center items-center w-40 h-40" target="_blank" href={item.link}>
                <img src={item.image} className="" alt={item.alt} loading="lazy"/>
            </a>
        </div>
    ));
    return (
        <>
            {partenaires}
        </>
    )
}


export default function Partenaires(){
    return(
        <div className="bg-black flex flex-col text-white text-center p-[2%] text-partenaire-size">
            NOS PARTENAIRES <br/>
            <div className="flex flex-wrap gap-20 px-4 py-20 items-center justify-center">
                <PartenairesCorps items={PARTENAIRES_KANCOON}/>
            </div>
        </div>
    )
}