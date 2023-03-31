import '@/styles/globals.css'
import Header from 'Components/Header'
import Layouts from 'Components/Layouts'
import type { AppProps } from 'next/app'

// interface mainnfo {
//    any
// }

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
    <Component {...pageProps} />
  </Layouts>
  )
}
