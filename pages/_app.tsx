import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {MoralisProvider} from "react-moralis"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={'gLzpYz7M9hFQmvfmawfLiLZ3XHMNR73Z7iOfea0g'}
      serverUrl={'https://nk6crv5g5fld.usemoralis.com:2053/server'}
    >
      {
        <Component {...pageProps} />
      }
    </MoralisProvider>
  )
}

export default MyApp
