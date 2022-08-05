import { Header } from "components/common/header/Header";
import { Footer } from "components/common/footer/Footer";

import 'styles/globals.scss'

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}