
export function VideoResponsive(props : any){
    let source = props
    return(
        <div className="bp:w-1/2 w-full relative pt-[56.25%] bp:pt-[28.125%] overflow-hidden ">
            <iframe
                className="absolute w-full h-full top-0 left-0 bottom-0 right-0"
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="auto"
                src={props.source}
            >
            </iframe>
        </div>
    )
}