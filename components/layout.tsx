// components/layout.js

import Navbar from './navbar'
import Footer from './footer'

interface PROPS{
    children:any
}

export default function Layout({ children }:PROPS) {
  return (
    <>
      <Navbar />
      <main  className="mx-auto pt-12 max-w-7xl">{children}</main>
      <Footer />
    </>
  )
}