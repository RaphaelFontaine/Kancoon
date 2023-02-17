import GetInTouchSimple from 'components/contact/formulaire'
import Head from 'next/head'
import Footer from '../components/common/footer'
import HeaderAction from '../components/common/header'
import { MentionsLegales } from '../components/common/mentions-legales'
import { Icon } from '../components/contact/icon'
import { MapsMap } from '../components/contact/maps'
import { SocialNetwork } from '../components/contact/social-network'

export default function Parasols() {
    return (
        <div>
            <Head>
                <title>Contactez-nous pour vos aménagements intérieurs et extérieurs</title>
                <meta name="description" content="Contactez-nous pour vos aménagements intérieurs et extérieurs" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
                <script async defer data-website-id="128afe3d-c0f3-4471-a7e9-0ceba4174583" src="https://stats.viking.click/umami.js"></script>
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px] bg-general-grey'>
                <div className='flex flex-wrap items-center justify-center gap-10 phone:space-y-0 mt-16'>
                    <GetInTouchSimple></GetInTouchSimple>
                    <Icon></Icon>
                </div>
                <SocialNetwork></SocialNetwork>
                <MapsMap></MapsMap>
            </main>
            <Footer></Footer>
            <MentionsLegales></MentionsLegales>

        </div>
    )
}