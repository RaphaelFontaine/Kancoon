import Head from 'next/head'
import HeaderAction from '../components/common/header'
import Footer from '../components/common/footer'
import { MentionsLegales } from '../components/common/mentions-legales'
import { Services } from '../components/accueil/services'
import Clients from '../components/accueil/clients'
import HomeCarousel from '../components/accueil/home-caroussel'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Kancoon, spécialiste de protection solaire en Vendée</title>
                <meta name="description" content="spécialiste de protection solaire en Vendée" />
                <link rel="icon" href="/FAVICON-transparent.png" />
                <script async defer data-website-id="128afe3d-c0f3-4471-a7e9-0ceba4174583" src="https://stats.viking.click/umami.js"></script>
            </Head>
            <HeaderAction></HeaderAction>
    
            <main className='pt-[95px] bg-dark-grey'>
                <HomeCarousel></HomeCarousel>
                <Services></Services>
                <Clients></Clients>
                
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>
           

        </div>
    )
}
