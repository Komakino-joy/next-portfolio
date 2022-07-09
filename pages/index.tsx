import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../src/components/Banner/Banner'
import Bio from '../src/components/Bio/Bio'
import LogoCloud from '../src/components/LogoCloud/LogoCloud'
import AllProjects from '../src/components/Projects/AllProjects'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bryan Alvarez | Full Stack Engineer</title>
        <meta name="description" content="Bryan Alvarez web development portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Bio />
      <AllProjects />
      <LogoCloud />
    </div>
  )
}

export default Home
