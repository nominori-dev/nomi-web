import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Programmer from '../public/programmer.svg'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

interface GithubStats {
  name?: string,
  location?: string,
  followers?: number,
  following?: number,
  public_repos?: number
}


export default function Home({data}) {

  let isMobile: boolean = false;

  React.useEffect(() => {
    isMobile = window.screen.width < 600;
  })

  return (
    <>
      <Head>
        <title>nominori</title>
        <meta name="description" content="Aleksei Shevtsov Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.navbar}>
          <a href='#' className={styles.title}>nominori-dev</a>
          <ul>
            <li><a id='navbar_link' href='https://github.com/nominori-dev'>Github</a></li>
            <li><a id='navbar_link' href='https://ink.bdv.pw/'>Blog</a></li>
            <li><a id='navbar_link' href='https://www.bdv.pw/'>BDV</a></li>
          </ul>
        </div>
        <div className={styles.main_content}>
          <div className={styles.tile}>
            <h2>Aleksei Shevtsov</h2>
            <p>Software developer and Co-Founder of BDV Foundation, 
              a company that provides Software as a Service and Outsourcing services. 
              I'm working with Java-based applications.</p>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.tile}>
            <h2>How to reach me?</h2>
            <p>You can reach me by e-mail: <a>nominori@bdv.pw</a> <br></br></p>
          </div>
          <div className={styles.tile}>
            <h2>My skills</h2>
              <p>Java 11+, Kotlin, Spring Framework</p>
              <p>Git, Github, JVM Build Tools (Maven / Gradle)</p>
              <p>SQL, RDBMS (MySQL, PostgreSQL)</p>
          </div>
          <div className={styles.tile}>
            <h2>Github stats</h2>
            <p>Name: <a>{data.name}</a></p>
            <p>Location: <a>{data.location}</a></p>
            <p>Following: <a>{data.following}</a></p>
            <p>Followers: <a>{data.followers}</a></p>
          </div>
        </div>
        <div className='footer'>
          <h3>E-mail: nominori@bdv.pw</h3>
          <small>Copyright @ 2022 Aleksei Shevtsov</small>
        </div>
      </main>
    </>
  )
}


export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/nominori-dev`)
  const resData = await res.json();

  let data: GithubStats = {};

  data.name = resData.name;
  data.public_repos = resData.public_repos;
  data.followers = resData.followers;
  data.following = resData.following;
  data.location = resData.location;

  console.log(data)
  return { props: {data}}
}