import Head from 'next/head'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Produit from '../components/pergolas/produits'
import RealisationsPergolas from '../components/pergolas/realisations'

export default function Pergolas() {
    return (
        <div>
            <Head>
                <title>Pergolas par KANCOON aux Sables d'Olonne et en Vendée</title>
                <meta name="description" content="Pergolas par KANCOON aux Sables d'Olonne et en Vendée" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
                <script async defer data-website-id="128afe3d-c0f3-4471-a7e9-0ceba4174583" src="https://stats.viking.click/umami.js"></script>
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-dark-grey'>
                <Produit></Produit>
                <RealisationsPergolas/>
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>
        </div>
    )
}