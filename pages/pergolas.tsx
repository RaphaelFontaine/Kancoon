import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/pergolas/hero'
import HeaderAction from '../components/common/header'
import Photo from '../components/pergolas/photo'

export default function Pergolas() {
    return (
        <div>
            <Head>
                <title>Kancoon</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href= "/FAVICON-transparent.png" />
            </Head>
            <HeaderAction></HeaderAction>
            <main className='pt-[95px]'>
                <Photo></Photo>
                <Hero></Hero>
            </main>

        </div>
    )
}