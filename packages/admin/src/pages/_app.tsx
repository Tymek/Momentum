import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider as GraphQLProvider } from 'utils/graphql'
import 'components/styles/fonts.scss'
import ErrorBoundary from 'components/ErrorBoundary'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Zaplecze</title>
      <meta name="theme-color" content="#111111" />
    </Head>
    <ErrorBoundary>
      <GraphQLProvider>
        <Component {...pageProps} />
      </GraphQLProvider>
    </ErrorBoundary>
  </>
)

export default MyApp
