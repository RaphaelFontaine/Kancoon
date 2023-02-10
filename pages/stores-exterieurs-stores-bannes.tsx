import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Produit from '../components/stores-ext/produits'
import RealisationsStoresExt from '../components/stores-ext/realisations'
import Realisations from '../components/stores-ext/realisations'

export default function StoresExt() {
    return (
        <div>
            <Head>
                <title>Stores extérieurs par KANCOON aux Sables d'Olonne et alentours</title>
                <meta name="description" content="Stores extérieurs par KANCOON aux Sables d'Olonne et alentours" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
                <script async defer data-website-id="128afe3d-c0f3-4471-a7e9-0ceba4174583" src="https://stats.viking.click/umami.js"></script>
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-dark-grey'>
                <Produit></Produit>
                <RealisationsStoresExt/>
                
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}