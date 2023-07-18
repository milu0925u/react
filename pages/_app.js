import '@/styles/globals.css'
import { Helmet } from 'react-helmet'
import '@/node_modules/bootstrap/scss/bootstrap.scss'
import '@/styles/product-table.css'
// import '@/styles/menu.css'
import '@/styles/book-list.css'

import { AuthProvider } from '@/hooks/use-auth'
// import Swal from '@/node_modules/sweetalert2/src/sweetalert2.js'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <Helmet>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
        {/* <link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css"></link> */}
      </Helmet>

      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </>
  )
}
