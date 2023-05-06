// @ts-nocheck
import Head from 'next/head'
import React, { FC, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Model } from '../components/Lambo'
import { Environment, Lightformer, OrbitControls, useProgress, Html } from '@react-three/drei'
import Layout from '../components/layout/Layout'
import PageWithLayoutType from '../components/layout/PageWithLayoutType'
import Link from 'next/link'
import HeroTile from '../components/hero/HeroTile'

interface GithubStats {
  name?: string,
  location?: string,
  followers?: number,
  following?: number,
  public_repos?: number
}

export const Home: FC = ({ data }: any) => {


  function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
  }

  return (
    <>
      <Head>
        <title>nominori</title>
        <meta name="description" content="Aleksei Shevtsov Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen flex items-center justify-center'>
        <div className='pb-24'>
          <div className="max-w-xs md:max-w-lg p-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-xl drop-shadow-2xl">
            <Link href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 hover:underline">Aleksei Shevtsov</h5>
            </Link>
            <p class="mb-3 font-normal text-gray-600">Software developer and Co-Founder of BDV Foundation,
              a company that provides Software as a Service and Outsourcing services.
              I&apos;m working with Java-based applications.</p>
            <div>
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 hover:underline">Skills</h5>
              <div>
                <p class="mb-3 font-normal text-gray-600">Java + Spring Framework (CRUD Applications, REST API's, MVC, Microservices).</p>
                <p class="mb-3 font-normal text-gray-600">TypeScript & JavaScript (React, NextJS, NestJS, Vue).</p>
                <p class="mb-3 font-normal text-gray-600">Git, Docker, WSL. Also experienced with Jenkins, Gitlab for CI/CD Pipelines.</p>
              </div>
            </div>
            <div>
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 hover:underline">Contact</h5>
              <div>
                <p class="mb-3 font-normal text-gray-600">You can reach me by this e-mail: <Link href="mailto:nominori@bdv.pw" class="inline-flex items-center text-blue-900 hover:underline">
                  nominori@bdv.pw
                  <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
                </Link> </p>

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


  ; (Home as PageWithLayoutType).layout = Layout;

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/nominori-dev`)
  const resData = await res.json();

  let data: GithubStats = {};

  data.name = resData.name;
  data.public_repos = resData.public_repos;
  data.followers = resData.followers;
  data.following = resData.following;
  data.location = resData.location;

  return { props: { data } }
}

export default Home;