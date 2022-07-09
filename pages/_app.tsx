import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Header from "../src/components/Header/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='App-wrapper' >
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
