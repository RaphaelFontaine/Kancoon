import Head from 'next/head'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Produit from '../components/terrasses/produits'
import RealisationsTerrasses from '../components/terrasses/realisations'

export default function Terrasses() {
    return (
        <div>
            <Head>
                <title>Terrasses bois et composites par KANCOON aux Sables d'Olonne</title>
                <meta name="description" content="Terrasses bois et composites par KANCOON aux Sables d'Olonne" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
                <script async defer data-website-id="128afe3d-c0f3-4471-a7e9-0ceba4174583" src="https://stats.viking.click/umami.js"></script>
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-dark-grey'>
                <Produit></Produit>
                <RealisationsTerrasses/>
                
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}