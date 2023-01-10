import '../styles/globals.css'
import '../styles/button-formulaire.css'
import '../styles/button-home.css'
import '../styles/button-home-right.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
