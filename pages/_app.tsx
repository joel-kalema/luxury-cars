import '../styles/globals.css'
import '../styles/cars/cars.css'
import Header from '../components/header';
import Footer from '../components/footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>
  )
}
