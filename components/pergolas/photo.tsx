

export default function Photo(){
    return(
        <>
            <div className="bg-white text-black text-primary-2">
                <img src="/assets/pergolas/pergola_bandeau.jpg" alt={"Pergolas Bioclimatique posée par KANCOON en Vendée - spécialiste de la protection solaire : pergolas, stores, terrasses aux Sables d'Olonne et en Vendée"}/>
            </div>
            <div className="overflow-y-scroll">
                <iframe
                    id="inlineFrameExample"
                    title="Inline Frame Example"
                    width="50%"
                    height="auto"
                    src={`https://www.youtube.com/embed/jP4kk6YNMr0`}
                >
                </iframe>
            </div>
        </>
    )
}