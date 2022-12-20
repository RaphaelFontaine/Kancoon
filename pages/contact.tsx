import Head from 'next/head'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import { GetInTouchSimple } from '../components/contact/formulaire'
import { Icon } from '../components/contact/icon'
import { MapsMap } from '../components/contact/maps'
import { SocialNetwork } from '../components/contact/social-network'

export default function Parasols() {
    return (
        <div>
            <Head>
                <title>Kancoon</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-general-grey'>
                <SocialNetwork></SocialNetwork>
                <div className='flex flex-wrap items-center justify-center space-x-10'>
                    <GetInTouchSimple></GetInTouchSimple>
                    <Icon></Icon>
                </div>
                <MapsMap></MapsMap>
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}