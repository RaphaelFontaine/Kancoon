import Head from 'next/head'
import HeaderAction from '../components/common/header'
import Footer from '../components/common/footer'
import { MentionsLegales } from '../components/common/mentions-legales'
import { Services } from '../components/accueil/services'
import Clients from '../components/accueil/clients'
import HomeCarousel from '../components/accueil/home-caroussel'
import { Demo } from '../components/common/transition'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Kancoon, spécialiste de protection solaire en Vendée</title>
                <meta name="description" content="spécialiste de protection solaire en Vendée" />
                <link rel="icon" href="/FAVICON-transparent.png" />
            </Head>
            <HeaderAction></HeaderAction>
    
            <main className='pt-[95px] bg-dark-grey'>
            <Demo></Demo>
                <HomeCarousel></HomeCarousel>
                <Services></Services>
                <Clients></Clients>
                
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>
           

        </div>
    )
}
