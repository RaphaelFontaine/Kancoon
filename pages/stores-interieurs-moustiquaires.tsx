import Head from 'next/head'
import Image from 'next/image'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import Produit from '../components/stores-int/produits'
import Realisations from '../components/stores-int/realisations'

export default function StoresInt() {
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
                <Realisations></Realisations>
                
            </main>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}