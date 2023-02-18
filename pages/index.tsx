import Head from 'next/head'
import { Roboto } from '@next/font/google'
import styles from '../styles/Home.module.css'
import React, { FC, Suspense } from 'react'
import { Canvas} from '@react-three/fiber'
import { TypeAnimation } from 'react-type-animation';
import { Model } from '../components/Lambo'
import { Environment, Lightformer, OrbitControls, useProgress, Html } from '@react-three/drei'
import Layout from '../components/layout/Layout'
import PageWithLayoutType from '../components/layout/PageWithLayoutType'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

interface GithubStats {
  name?: string,
  location?: string,
  followers?: number,
  following?: number,
  public_repos?: number
}

export const Home: FC = ({data}: any) => {


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
      <main className={roboto.className}>
        <div className={styles.main_content}>
          <div className={styles.tile}>
            <h2>
              <TypeAnimation
              sequence={['Aleksei Shevtsov', 1000]}
              speed={45} 
              wrapper="div"
              />
            </h2>
            <p>Software developer and Co-Founder of BDV Foundation, 
              a company that provides Software as a Service and Outsourcing services. 
              I&apos;m working with Java-based applications.</p>
          </div>
        </div>
        <div className={styles.scene}>
          <Canvas shadows={false} gl={{ logarithmicDepthBuffer: true, antialias: false, alpha: true }} dpr={[1, 1.5]} camera={{ position: [0, 0, 15], fov: 25 }} className={styles.canvas}>
            <Suspense fallback={<Loader/>}>
            <Model rotation={[0, Math.PI / 0.55, 0]} scale={0.018} />
            <hemisphereLight intensity={1} />
            
          <Environment resolution={512}>
            {/* Ceiling */}
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
            <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
            {/* Sides */}
            <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
            <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} getObjectsByProperty={undefined} getVertexPosition={undefined} />
          </Environment>

          <OrbitControls autoRotate={true} enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
            </Suspense>
          </Canvas>
        </div>

        <div className={styles.info}>
          <div className={styles.tile}>
            <h2>How to reach me?</h2>
            <p>You can reach me by e-mail: <a>nominori@bdv.pw</a> <br></br></p>
          </div>
          <div className={styles.tile}>
            <h2>My skills</h2>
              <p>Java, Spring Framework (Core, Web, Data)</p>
              <p>Git, Github, JVM Build Tools (Maven / Gradle)</p>
              <p>SQL RDBMS (MySQL, MariaDB, PostgreSQL)</p>
          </div>
          <div className={styles.tile}>
            <h2>Github stats</h2>
            <p>Name: <a>{data.name}</a></p>
            <p>Location: <a>{data.location}</a></p>
            <p>Following: <a>{data.following}</a></p>
            <p>Followers: <a>{data.followers}</a></p>
          </div>
        </div>
      </main>
    </>
  )
}


;(Home as PageWithLayoutType).layout = Layout;

export async function getServerSideProps() {
  const res = await fetch(`https://api.github.com/users/nominori-dev`)
  const resData = await res.json();

  let data: GithubStats = {};

  data.name = resData.name;
  data.public_repos = resData.public_repos;
  data.followers = resData.followers;
  data.following = resData.following;
  data.location = resData.location;

  return { props: {data}}
}

export default Home;