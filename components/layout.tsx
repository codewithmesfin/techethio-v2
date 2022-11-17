import Navbar from './navbar'
import Footer from './footer'
import { useRouter } from 'next/router'

interface PROPS {
  children: any
}

export default function Layout({ children }: PROPS) {
const route=useRouter()
  return (
    <>
      <Navbar />
      <main className={`mx-auto pt-12 max-w-${route.pathname!=='/hosting' &&'7xl'}`}>{children}</main>
      <Footer />
    </>
  )
}