import Head from 'next/head'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Partenaires from '../components/la-societe/partenaires'
import Produit from '../components/la-societe/produits'
import Satisfaction from '../components/la-societe/satisfaction'

export default function Parasols() {
    return (
        <div>
            <Head>
                <title>KANCOON en Vendée : 20 ans d'experience dans la protection solaire</title>
                <meta name="description" content="KANCOON en Vendée : 20 ans d'experience dans la protection solaire" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
                <script async defer data-website-id="128afe3d-c0f3-4471-a7e9-0ceba4174583" src="https://stats.viking.click/umami.js"></script>
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-dark-grey'>
                <Produit></Produit>
                <Satisfaction></Satisfaction>
                <Partenaires></Partenaires>
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>
        </div>
    )
}