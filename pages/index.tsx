import Head from 'next/head'
import Image from 'next/image'
import HeaderAction from '../components/common/header'
import Demo from '../components/common/product-caroussel'
import HomeCaroussel from '../components/accueil/home-caroussel'
import FooterLinks from '../components/common/footer'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Kancoon, spécialiste de protection solaire en Vendée</title>
                <meta name="description" content="spécialiste de protection solaire en Vendée" />
                <link rel="icon" href="/FAVICON-transparent.png" />
            </Head>
            <HeaderAction></HeaderAction>
    
            <main>
            </main>

           

        </div>
    )
}
