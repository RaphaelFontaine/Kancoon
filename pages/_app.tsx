import '../styles/globals.css'
import '../styles/button-formulaire.css'
import '../styles/button-home.css'
import '../styles/button-home-right.css'
import '../styles/button-realisation.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <Toaster/>
      <Component {...pageProps} /> 
    </>
  )
}
