import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Produit from '../components/voiles/produits'

export default function Voiles() {
    return (
        <div>
            <Head>
                <title>Voiles d'ombrage par KANCOON aux Sables d'Olonne</title>
                <meta name="description" content="Voiles d'ombrage par KANCOON aux Sables d'Olonne" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-dark-grey'>
                <Produit></Produit> 
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}