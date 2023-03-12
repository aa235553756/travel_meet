import Head from 'next/head'
import HotAttract from '@/modules/HomePage/HotAttract'
import WhereIGO from '@/modules/HomePage/WhereIGO'
import Explore from '@/modules/HomePage/Explore'
import Feature from '@/modules/HomePage/Feature'
import Banner from '@/modules/HomePage/Banner'


export default function Home() {
  return (
    <>
      <Head>
        <title>聚會趣</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner />
        <Explore />
        <WhereIGO />
        <Feature />
        <HotAttract />
      </div>
    </>
  )
}
