import Head from 'next/head'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Produit from '../components/stores-int/produits'
import RealisationsStoresInt from '../components/stores-int/realisations'

export default function StoresInt() {
    return (
        <div>
            <Head>
                <title>Stores intérieurs par KANCOON aux Sables d'Olonne et alentours</title>
                <meta name="description" content="Stores intérieurs par KANCOON aux Sables d'Olonne et alentours" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
                <script async defer data-website-id="128afe3d-c0f3-4471-a7e9-0ceba4174583" src="https://stats.viking.click/umami.js"></script>
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-dark-grey'>
                <Produit></Produit>
                <RealisationsStoresInt/>
                
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}