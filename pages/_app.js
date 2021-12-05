import 'tailwindcss/tailwind.css'
import "../styles/globals.css"

import {LanguageProvider} from '../context/Language'

function MyApp({ Component, pageProps }) {
  return <LanguageProvider>
          <Component {...pageProps} />
         </LanguageProvider>
}

export default MyApp
