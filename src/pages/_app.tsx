import { SWRConfig } from "swr";
import { Header } from "components/common/header/Header";
import { Footer } from "components/common/footer/Footer";
import 'styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fallback: pageProps.fallback ?? {} }}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </SWRConfig>
  )
}