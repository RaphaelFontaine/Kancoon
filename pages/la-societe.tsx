import Head from 'next/head'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Partenaires from '../components/la-societe/partenaires'
import Produit from '../components/la-societe/produits'


export default function Parasols() {
    return (
        <div>
            <Head>
                <title>Kancoon</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-dark-grey'>
                <Produit></Produit>  
                <Partenaires></Partenaires>              
            </main>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}