import '../styles/globals.css'
import PageWithLayoutType from '../components/layout/PageWithLayoutType'
import { useRouter } from "next/router";

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any
}

export default function App({ Component, pageProps }: AppLayoutProps) {
  const router = useRouter();
  const NavLayout = Component.layout || ((children) => <>{children}</>)
  return (
    <NavLayout>
      <Component {...pageProps} key={router.route} />
    </NavLayout>
  )
}
