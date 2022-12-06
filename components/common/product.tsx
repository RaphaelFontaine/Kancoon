import {ProductCarroussel} from "../common/product-caroussel";

interface ShowcaseProps {
    left : boolean
    title : string
    core : string
    images : string[]
}
export function Showcase(props : ShowcaseProps){
    let {left, title, core, images} = props

    return(
        <div className={`flex flex-col bp:flex-row h-auto ${left ? "" : "bp:flex-row-reverse"}`}>
            <div className={`${left ? "bg-white text-corps-color" : "bg-general-grey text-white"} h-auto flex flex-row bp:w-1/2 w-full`}>
                <div className={`${left ? "pl-band-left" : "right-0 pr-band-left"} absolute flex flex-row z-1 h-grey-band`}>
                    <div className={`${left ? "bg-general-grey h-grey-band" : "bg-green h-green-band"}  w-grey-band`}>
                    </div>
                    <div className={`${left ? "bg-white" : "bg-general-grey"}  pl-band-between`}>
                        <div className={`${left ? "bg-green h-green-band" : " bg-white h-grey-band"}  w-green-band`}>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col z-0 pt-[7%] px-[14%]">
                    <div className="text-title-size text-center">
                        {title}
                    </div>
                    <div className="text-corps-size py-[12%] bp:py-[9%] lg:py-[12%] leading-phone-text bp:leading-text lg:leading-max-text">
                        {core} 
                    </div>
                </div>
            </div>

            <div className="h-auto bp:w-1/2 w-full">
                {
                    images.length === 1 ?
                    <img 
                        src={images[0]}
                        loading="lazy"
                    />
                    : 
                    <ProductCarroussel images= {images}/>
                }
            </div>
        </div>
    )
}