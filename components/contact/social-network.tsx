export function SocialNetwork() {
    return (
        <div className="pt-20 gap-20 space-x-14 space-y-4 phone:space-y-0 flex flex-wrap text-footer-corps items-center justify-center">
            <a className="transition-all duration-500 px-[1%]" target="_blank" href= "https://www.facebook.com/kancoonolonne">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler rounded-lg hover:scale-110 bg-facebook icon-tabler-brand-facebook transition-all duration-300" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"  stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
            </a>


            <a className="transition-all duration-500 px-[1%]" target="_blank" href= "https://www.instagram.com/kancoonstorespergolas/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler rounded-lg hover:scale-110 bg-instagram icon-tabler-brand-facebook  transition-all duration-300" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
            </a>

            <a className="transition-all duration-500 px-[1%]" target="_blank" href= "https://www.linkedin.com/company/kancoon/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler rounded-lg hover:scale-110 bg-linkedin icon-tabler-brand-facebook  transition-all duration-300" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="11" x2="8" y2="16" />
                            <line x1="8" y1="8" x2="8" y2="8.01" />
                        <line x1="12" y1="16" x2="12" y2="11" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
            </a>


            <a className="transition-all duration-500 px-[1%]" target="_blank" href= "https://www.youtube.com/channel/UCpjiJxmhMs5MzIO2xa8yJaA">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler rounded-lg hover:scale-110 bg-youtube icon-tabler-brand-youtube transition-all duration-300" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                </svg>
            </a>
        </div>
    )
}