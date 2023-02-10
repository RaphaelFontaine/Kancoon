import Head from 'next/head'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Produit from '../components/parasols/produits'
import RealisationsParasols from '../components/parasols/realisations'
import Realisations from '../components/parasols/realisations'

export default function Parasols() {
    return (
        <div>
            <Head>
                <title>Parasols professionnels par KANCOON aux Sables d'Olonne et en Vendée</title>
                <meta name="description" content="Parasols professionnels par KANCOON aux Sables d'Olonne et en Vendée" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
                <script async defer data-website-id="128afe3d-c0f3-4471-a7e9-0ceba4174583" src="https://stats.viking.click/umami.js"></script>
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-dark-grey'>
                <Produit></Produit>
                <RealisationsParasols/>
                
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}