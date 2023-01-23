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