import { Provider } from 'next-auth/client'
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps }) => {

  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp